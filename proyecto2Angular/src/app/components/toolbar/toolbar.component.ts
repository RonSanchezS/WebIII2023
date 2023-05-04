import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  tokenExists = localStorage.getItem('token') ? true : false;

  constructor(private router : Router, private api : UsuariosService) { }

  getMyUsername(){
    return this.api.getMyUsername();
  }

  logout(){
    localStorage.removeItem('token');
    setTimeout(() => {
      this.router.navigate(['/login']);
      window.location.reload();
    }, 100);
  }

}
