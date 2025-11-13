import { Component, computed, input } from '@angular/core';
import { User } from './user.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  user = input.required<User>();

  imagePath = computed(() => 'users/' + this.user().avatar);
}
