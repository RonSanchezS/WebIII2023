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

  constructor(private router : Router, private api : UsuariosService) {
    
    this.getMyID();
   }

  myID  : number = 0;
  myUsername : string = "";
  getMyID(){
    this.api.getMyID().subscribe(
      data => {
        localStorage.setItem('myID', data.user_id.toString());
        this.myID = data.user_id;
        this.getMyUsername(this.myID);
      }
    )
  }
  getMyUsername(id : number){
   this.api.getMyUsername(id).subscribe(
      data => {
        this.myUsername = data.username;
        localStorage.setItem('myUsername', data.username);
      }
    )
  }

  logout(){
    localStorage.removeItem('myUsername');
    localStorage.removeItem('myID');
    localStorage.removeItem('token');
    setTimeout(() => {
      this.router.navigate(['/login']);
      window.location.reload();
    }, 100);
  }

}
