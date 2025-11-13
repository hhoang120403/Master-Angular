import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';
import { NoTask } from './tasks/no-task/no-task';
import { resolveTitle, resolveUserName, UserTasks } from './users/user-tasks/user-tasks';
import { NotFoundComponent } from './not-found/not-found';
import { routes as usersRoutes } from './users/users.routes';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();

  if (shouldGetAccess < 1) return true;

  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

export const routes: Routes = [
  {
    path: '',
    component: NoTask,
    // redirectTo: 'tasks',
    // pathMatch: 'full',
    title: 'No Tasks',
  },
  {
    path: 'users/:userId',
    component: UserTasks,
    children: usersRoutes,
    canMatch: [dummyCanMatch],
    data: {
      message: 'Welcome to the tasks page!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
