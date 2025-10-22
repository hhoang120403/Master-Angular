import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type UserType } from './user.model';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({ required: true }) user!: UserType;
  @Input({ required: true }) selected!: boolean;
  @Output() selectUser = new EventEmitter<string>();

  // Signal
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // selectUser = output<string>();

  // imagePath = computed(() => 'assets/users/' + this.avatar());

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.selectUser.emit(this.user.id);
  }
}
