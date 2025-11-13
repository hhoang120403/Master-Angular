import { Component, computed, inject, input } from '@angular/core';
import { TaskComponent } from './task/task';
import { TasksService } from './tasks.service';
import { ResolveFn, RouterLink } from '@angular/router';
import { Task } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, RouterLink],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  userTasks = input.required<Task[]>();
  userId = input.required<string>();
  order = input<'asc' | 'desc' | undefined>();
  // private tasksService = inject(TasksService);
  // userTasks = computed(() =>
  //   this.tasksService
  //     .allTasks()
  //     .filter((task) => task.userId === this.userId())
  //     .sort((a, b) => {
  //       if (this.order() === 'asc') {
  //         return a.id > b.id ? 1 : -1;
  //       } else {
  //         return b.id > a.id ? 1 : -1;
  //       }
  //     })
  // );
}

export const resolveUserTasks: ResolveFn<Task[]> = (activatedRouteSnapshot, routerState) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter((task) => task.userId === activatedRouteSnapshot.paramMap.get('userId'));

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};
