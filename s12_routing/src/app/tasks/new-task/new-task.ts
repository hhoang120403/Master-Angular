import { Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';
import { CanDeactivateFn, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, RouterLink],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  userId = input.required<string>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');
  submitted = false;
  private tasksService = inject(TasksService);
  private router = inject(Router);

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle(),
        summary: this.enteredSummary(),
        date: this.enteredDate(),
      },
      this.userId()
    );

    this.submitted = true;

    this.router.navigate(['/users', this.userId(), 'tasks'], {
      replaceUrl: true,
    });
  }
}

export const canLeaveEditPage: CanDeactivateFn<NewTask> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  if (component.submitted) {
    return true;
  }
  if (component.enteredTitle() || component.enteredSummary() || component.enteredDate()) {
    return confirm('Are you sure you want to leave? All unsaved changes will be lost.');
  }
  return true;
};
