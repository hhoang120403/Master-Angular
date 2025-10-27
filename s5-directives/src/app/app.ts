import { Component, computed, inject, signal } from '@angular/core';
import { AuthComponent } from './auth/auth';
import { LearningResourcesComponent } from './learning-resources/learning-resouces';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';
import { AuthDirective } from './auth/auth.directive';

@Component({
  selector: 'app-root',
  imports: [AuthComponent, LearningResourcesComponent, CommonModule, AuthDirective],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('s5-directives');
  private authService = inject(AuthService);

  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
