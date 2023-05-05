import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass'],
})
export class CreateAccountComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
    Validators.maxLength(20),
    Validators.pattern(/^[a-zA-Z0-9_-]*$/),
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
    Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=?])([a-zA-Z0-9!@#$%^&*()_+-=?]+)$/
    ),
  ]);

  hide = true;

  constructor(private api: UsuariosService, private router : Router) {}
  error = false;
  createAccount() {
    let username = this.username.value;
    let password = this.password.value;
    let email = this.email.value;

    if (username && password && email) {
      this.api.createUsuario(username, password, email).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/login']);
        },
        error: (error) => {
          console.log(error);
          this.error = true;
        },
      });
    }
  }

  getErrorMessage(type: string) {

    if (type === 'email') {
      if (this.email.hasError('required')) {
        return 'You must enter a value';
      }
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
    if (type === 'username') {
      if (this.username.hasError('required')) {
        return 'You must enter a value';
      }
      return this.username.hasError('minlength')
        ? 'Username must be at least 6 characters long'
        : this.username.hasError('maxlength')
        ? 'Username must be at most 20 characters long'
        : this.username.hasError('pattern')
        ? 'Username can only contain letters, numbers, underscores and hyphens'
        : '';
    }
    if (type === 'password') {
      if (this.password.hasError('required')) {
        return 'You must enter a value';
      }
      return this.password.hasError('minlength')
        ? 'Password must be at least 8 characters long'
        : this.password.hasError('maxlength')
        ? 'Password must be at most 30 characters long'
        : this.password.hasError('pattern')
        ? 'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character'
        : '';
    }
    return '';
    
  }
}
