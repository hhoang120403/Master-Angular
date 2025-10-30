import { Component } from '@angular/core';
import { TasksList } from './tasks-list/tasks-list';
import { NewTask } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  imports: [TasksList, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {}
