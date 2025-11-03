import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('RxJs');
  count = signal(0);
  count$ = toObservable(this.count);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 0 });
  customInterval$ = new Observable((subscriber) => {
    let timesExcuted = 0;
    const intervalId = setInterval(() => {
      if (timesExcuted >= 5) {
        clearInterval(intervalId);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value...');
      subscriber.next({ message: 'New value' });
      timesExcuted++;
    }, 2000);
  });
  private destroyRef = inject(DestroyRef);

  constructor() {
    // effect(() => {
    //   console.log('Count: ', this.count());
    // });
  }

  ngOnInit(): void {
    // const subscription = interval(1000)
    //   .pipe(map((value) => value * 2))
    //   .subscribe({
    //     next: (value) => console.log(value),
    //   });

    this.customInterval$.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Completed!'),
    });

    const subscription = this.count$.subscribe({
      next: (value) => console.log('Count: ', value),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.count.update((value) => value + 1);
  }
}
