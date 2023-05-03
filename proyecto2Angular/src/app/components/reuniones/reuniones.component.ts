import { Component } from '@angular/core';
import { ReunionesService } from 'src/app/services/reuniones.service';
import { Reunion } from '../../models/Reunion';

@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.sass']
})
export class ReunionesComponent {

  reunionesTotales : Reunion[] = [];

  constructor(private api : ReunionesService) {
    this.getReuniones();
   }
   getReuniones(){
    this.api.getReuniones().subscribe({
      next: (data) => {
        console.log(data);
        this.reunionesTotales = data;
      },
      error: (error) => {
        console.log(error);
        
      },
    });
   }
   eliminarReunion(id : number){
  alert("Se eliminara la reunion con id: "+id);
  this.api.deleteReunion(id).subscribe({
    next: (data) => {
      console.log(data);
      this.getReuniones();
    }
  })
  
  }
 
}
