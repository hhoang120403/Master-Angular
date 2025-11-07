import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { debounceTime, of } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return { doesNotContainQuestionMark: true };
}

function emailIsUnique(control: AbstractControl) {
  if (control.value === 'test@test.com') {
    return of({ emailIsNotUnique: true });
  }
  return of(null);
}

let initialEmail = '';
const savedFormValue = window.localStorage.getItem('formValue');
if (savedFormValue) {
  const { email: savedEmail } = JSON.parse(savedFormValue);
  initialEmail = savedEmail;
}

@Component({
  selector: 'app-login-reactive',
  templateUrl: './loginReactive.html',
  styleUrl: './loginReactive.css',
  imports: [ReactiveFormsModule],
})
export class LoginReactiveComponent implements OnInit {
  private destroyRef = inject(DestroyRef);

  form = new FormGroup({
    email: new FormControl(initialEmail, {
      validators: [Validators.required, Validators.email],
      asyncValidators: [emailIsUnique],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  });

  get emailIsInValid() {
    return (
      this.form.controls['email'].touched &&
      this.form.controls['email'].dirty &&
      this.form.controls['email'].invalid
    );
  }

  get passwordIsInValid() {
    return (
      this.form.controls['password'].touched &&
      this.form.controls['password'].dirty &&
      this.form.controls['password'].invalid
    );
  }

  ngOnInit() {
    // const savedFormValue = window.localStorage.getItem('formValue');
    // if (savedFormValue) {
    //   const { email } = JSON.parse(savedFormValue);

    //   this.form.patchValue({
    //     email,
    //   });
    // }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: (value) => {
        window.localStorage.setItem('formValue', JSON.stringify(value));
      },
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
