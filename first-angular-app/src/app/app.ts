import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-angular-app');
}
