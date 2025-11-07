import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('formValue');

      if (savedForm) {
        const { email } = JSON.parse(savedForm);
        setTimeout(() => {
          this.form().controls['email'].setValue(email);
        }, 1);
      }

      const subscription = this.form()
        .valueChanges?.pipe(debounceTime(500))
        .subscribe((value) => {
          window.localStorage.setItem('formValue', JSON.stringify({ email: value.email }));
        });

      this.destroyRef.onDestroy(() => {
        subscription?.unsubscribe();
      });
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    console.log({ email, password });

    form.reset();
  }
}
