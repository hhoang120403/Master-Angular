import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host: {
    '(click)': 'onLog()',
  },
})
export class LogDirective {
  private elementRef = inject(ElementRef);

  constructor() {
    console.log('LogDirective constructor');
  }

  onLog() {
    console.log('Clicked from LogDirective');
    console.log(this.elementRef.nativeElement);
  }
}
