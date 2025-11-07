import { Component, signal } from '@angular/core';
import { Signup } from './auth/signup/signup';

@Component({
  selector: 'app-root',
  imports: [Signup],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s11-forms');
}
