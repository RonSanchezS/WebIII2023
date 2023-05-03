import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.sass']
})
export class ToolbarComponent {

  tokenExists = localStorage.getItem('token') ? true : false;

  constructor(private router : Router) { }

  logout(){
    localStorage.removeItem('token');
    setTimeout(() => {
      this.router.navigate(['/login']);
      window.location.reload();
    }, 100);
  }

}
