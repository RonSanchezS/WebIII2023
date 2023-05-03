import { Component } from '@angular/core';
import { ReunionesService } from '../services/reuniones.service';
import { FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.sass']
})
export class CreateGroupComponent {

  usuarios : Usuario[] = [];

  nombre = new FormControl('',[
    Validators.required,
    Validators.minLength(6),
  ]);
  fecha = new FormControl('',[
    Validators.required,
  ]);
  hora = new FormControl('',[
    Validators.required,
  ]);


  getErrorMessage(type: string) {
    if (type === 'nombre') {
      if (this.nombre.hasError('required')) {
        return 'You must enter a value';
      }
      if (this.nombre.hasError('minlength')) {
        return 'You must enter a value of 6 characters or more';
      }
      return this.nombre.hasError('nombre') ? 'Not a valid nombre' : '';
    }
    if (type === 'fecha') {
      if (this.fecha.hasError('required')) {
        return 'You must enter a value';
      }
      return this.fecha.hasError('fecha') ? 'Not a valid fecha' : '';
    }
    if (type === 'hora') {
      if (this.hora.hasError('required')) {
        return 'You must enter a value';
      }
      return this.hora.hasError('hora') ? 'Not a valid hora' : '';
    }
    return "Aqui saldra el error pertinente";
  }
  constructor(private api : ReunionesService, private apiUsuarios : UsuariosService, private router : Router) { 
    this.getUsuarios();
  }
  numeros = new Set();

  select(id : number){
    if(this.numeros.has(id)){
      this.numeros.delete(id);
    }else{
      this.numeros.add(id);
    }
   }
  createGroup(){
    let nombre = this.nombre.value;
    let fecha = this.fecha.value;
    let hora = this.hora.value;
    let numerosArray = [...this.numeros]
    console.log(numerosArray);
    console.log(nombre);
    console.log(fecha);
    console.log(hora);
    if (nombre && fecha && hora && this.numeros) {
      this.api.createReunion(nombre, fecha, hora, 1, numerosArray as number[]).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.log(error);

        }
      });
    }
    

  }
  getUsuarios(){
    this.apiUsuarios.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        console.log(data); 
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

}
