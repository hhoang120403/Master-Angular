import { Component, input, output, signal } from '@angular/core';
import { TicketModel } from './ticket.model';

@Component({
  selector: 'app-ticket',
  imports: [],
  templateUrl: './ticket.html',
  styleUrl: './ticket.css',
})
export class Ticket {
  ticket = input.required<TicketModel>();
  closeTicket = output();
  detailsVisible = signal(false);

  onToggleDetails() {
    this.detailsVisible.set(!this.detailsVisible());
    // this.detailsVisible.update((visible) => !visible);
  }

  onMarkAsCompleted() {
    this.closeTicket.emit();
  }
}
