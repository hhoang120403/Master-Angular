import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Users } from './users/users';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Users, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s12_routing');
}
