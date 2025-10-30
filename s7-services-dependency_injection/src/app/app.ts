import { Component, signal } from '@angular/core';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s7-services-dependency_injection');
}
