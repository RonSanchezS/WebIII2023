import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reunion } from 'src/app/models/Reunion';
import { Usuario } from 'src/app/models/usuario';
import { ReunionesService } from 'src/app/services/reuniones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  usuarios : Reunion[] = [];
  setReuniones : Set<Reunion> = new Set();
  constructor(
    private route: ActivatedRoute,
    private api: ReunionesService,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {});
    this.setUpHomePage();
  }
  setUpHomePage(){
    this.api.getMiID().subscribe({
      next: (data) => {
        console.log("ID del usuario logueado: "+data.user_id);
        this.returnMisReuniones(data.user_id);
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      },
    });
  };
  returnMisReuniones(myID : number) {
    this.api.getMisReuniones().subscribe({
      next: (data) => {
          console.log(data);
          data.forEach((reunion) => {
            if(reunion.integrantes.includes(myID)){
              this.setReuniones.add(reunion);
            }
          });
        },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      },
    });
  }
}
