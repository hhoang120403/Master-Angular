import { Component, inject, signal } from '@angular/core';
import { AvailablePlaces } from './places/available-places/available-places';
import { UserPlaces } from './places/user-places/user-places';
import { ErrorService } from './shared/error.service';
import { ErrorModalComponent } from './shared/modal/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  imports: [AvailablePlaces, UserPlaces, ErrorModalComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s10-sending-http');

  private errorService = inject(ErrorService);
  error = this.errorService.error;
}
