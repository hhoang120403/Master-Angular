import { Component, inject, input } from '@angular/core';
import { TasksService } from '../tasks.service';
import { Task } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  task = input.required<Task>();
  private tasksService = inject(TasksService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  onComplete() {
    this.tasksService.removeTask(this.task().id);
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute,
      onSameUrlNavigation: 'reload',
      queryParamsHandling: 'preserve',
    });
  }
}
