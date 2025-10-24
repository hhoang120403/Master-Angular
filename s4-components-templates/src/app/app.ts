import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { DashboardItem } from './dashboard/dashboard-item/dashboard-item';
import { Tickets } from './dashboard/tickets/tickets';

@Component({
  selector: 'app-root',
  imports: [Header, ServerStatus, Traffic, Tickets, DashboardItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s4-components-templates');
}
