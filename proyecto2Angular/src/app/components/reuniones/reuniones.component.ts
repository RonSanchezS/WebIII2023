import { Component } from '@angular/core';
import { ReunionesService } from 'src/app/services/reuniones.service';
import { Reunion } from '../../models/Reunion';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.sass'],
})
export class ReunionesComponent {
  reunionesTotales: Reunion[] = [];
  usuariosTotales: Record<number, string> = {};
  constructor(
    private api: ReunionesService,
    private router: Router,
    private apiUsuarios: UsuariosService
  ) {
    this.getReuniones();
    this.getUsuarios();
  }
  getUsuarios() {
    this.apiUsuarios.getUsuarios().subscribe({
      next: (data) => {
        console.log(data);
        data.forEach((usuario) => {
          this.usuariosTotales[usuario.id] = usuario.username;
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getReuniones() {
    this.api.getReuniones().subscribe({
      next: (data) => {
        console.log(data);
        this.reunionesTotales = data;
      },
      error: (error) => {
        console.log(error);
        this.router.navigate(['/login']);
      },
    });
  }
  eliminarReunion(id: number) {
    alert('Se eliminara la reunion con id: ' + id);
    this.api.deleteReunion(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getReuniones();
      },
    });
  }
}
