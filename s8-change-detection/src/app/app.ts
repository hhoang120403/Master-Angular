import { Component, signal } from '@angular/core';
import { Counter } from './counter/counter';
import { Messages } from './messages/messages';

@Component({
  selector: 'app-root',
  imports: [Counter, Messages],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s8-change-detection');
  get debugOutput() {
    console.log('[AppComponent] "debugOutput" binding re-evaluated.');
    return 'AppComponent Component Debug Output';
  }
}
