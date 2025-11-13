import { Component, inject } from '@angular/core';
import { UsersService } from './users.service';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private usersService = inject(UsersService);
  users = this.usersService.users;
}
