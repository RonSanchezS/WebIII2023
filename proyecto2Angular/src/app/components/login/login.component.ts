import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  constructor(private api: TokenService, private router : Router) {
    if(localStorage.getItem('token')){
      this.router.navigate(['/home']);
    }
  }

  hide = true;
  inputUsername = '';
  inputPassword = '';
  login() {
    this.api.getToken(this.inputUsername, this.inputPassword).subscribe({
      next: (data) => {
        localStorage.setItem('token', data['token']);
        setTimeout(() => {
        this.router.navigate(['/home']);
          window.location.reload();
        }, 100);
      },
      error: (error) => {
        alert('Usuario o contraseña incorrectos');
        this.inputPassword = '';
      },
    });

  }
}
