import { Component } from '@angular/core';
import { NewTicket } from './new-ticket/new-ticket';
import { TicketModel } from './ticket/ticket.model';
import { Ticket } from './ticket/ticket';

@Component({
  selector: 'app-tickets',
  imports: [NewTicket, Ticket],
  templateUrl: './tickets.html',
  styleUrl: './tickets.css',
})
export class Tickets {
  tickets: TicketModel[] = [];

  onAdd(ticket: { title: string; text: string }) {
    this.tickets.push({
      id: Math.random().toString(),
      title: ticket.title,
      request: ticket.text,
      status: 'open',
    });
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return {
          ...ticket,
          status: 'closed',
        };
      }
      return ticket;
    });
  }
}
