import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  navegarAPagina(pagina : string){
    //navegar a about
    alert("Navegando a " + pagina);
    this.router.navigate([`${pagina}`]);
  }
  
}
