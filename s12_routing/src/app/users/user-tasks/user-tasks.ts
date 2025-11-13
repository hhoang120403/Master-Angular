import { Component, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.html',
  styleUrl: './user-tasks.css',
})
export class UserTasks {
  // userId = input.required<string>();
  userName = input.required<string>();
  message = input.required<string>();
  // private usersService = inject(UsersService);

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name || ''
  // );

  // private activatedRoute = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   this.activatedRoute.data.subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //   });
  // }
}

export const resolveUserName: ResolveFn<string> = (
  activatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userId = activatedRouteSnapshot.paramMap.get('userId') || '';
  const userName = usersService.users.find((u) => u.id === userId)?.name || '';
  return userName;
};

export const resolveTitle: ResolveFn<string> = (activatedRouteSnapshot, routerState) => {
  const userName = resolveUserName(activatedRouteSnapshot, routerState);
  return userName ? `${userName}'s Tasks` : 'No Tasks';
};
