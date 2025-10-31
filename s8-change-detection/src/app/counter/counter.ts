import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { InfoMessage } from '../info-message/info-message';

@Component({
  selector: 'app-counter',
  imports: [InfoMessage],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Counter implements OnInit {
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit() {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);

    setTimeout(() => {
      console.log('Timer expired!');
    }, 5000);
  }

  onDecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
  }
}
