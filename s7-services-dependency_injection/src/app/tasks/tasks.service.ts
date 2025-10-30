import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './tasks.model';
import { LoggingService } from '../logging.service';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  get allTasks() {
    return this.tasks.asReadonly();
  }

  addTask(taskData: { title: string; description: string }) {
    const task: Task = {
      id: Math.random().toString(),
      title: taskData.title,
      description: taskData.description,
      status: 'OPEN',
    };
    this.tasks.update((tasks) => [...tasks, task]);
    this.loggingService.log(`Added task: ${task.title}`);
  }

  updateTaskStatus(taskId: string, status: TaskStatus) {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === taskId ? { ...task, status } : task))
    );
  }
}
