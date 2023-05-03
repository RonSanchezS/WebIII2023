import { Component } from '@angular/core';
import { ReunionesService } from '../services/reuniones.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Reunion } from '../models/Reunion';
import { Usuario } from '../models/usuario';
import { FormControl, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-edit-group',
  templateUrl: './edit-group.component.html',
  styleUrls: ['./edit-group.component.sass'],
})
export class EditGroupComponent {
  id: number = 0;
  reunionObjetivo?: Reunion;

  
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


  constructor(
    private api: ReunionesService,
    private apiUsuarios : UsuariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.getReunion();
      this.getUsuarios();
    });
  }
  checkSiUsuarioBelongsToReunion(id : number){
    if(this.reunionObjetivo!.integrantes.includes(id) ){
      console.log("Usuario " + id + " pertenece a la reunion " + this.id)
      this.select(id)
      return true;
    }
   return false;
  }
  getUsuarios(){
    this.apiUsuarios.getUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  getReunion() {
    this.api.getReunionIndividual(this.id).subscribe({
      next: (data) => {
        this.reunionObjetivo = data;
        this.guardarValoresDeReunion(data);
        console.log(this.reunionObjetivo.integrantes);
      },
      error: (error) => {
        console.log(error);
        if (error.status == 404) {
          alert('No se encontro la reunion');
          this.router.navigate(['/reuniones']);
        }
      }
    });
  }
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
  guardarValoresDeReunion(data : Reunion){
    this.nombre.setValue(data.nombre);
    this.fecha.setValue(data.fecha);
    this.hora.setValue(data.hora);
  }
  updateGroup(){

  }
  numeros = new Set();

  select(id : number){
    if(this.numeros.has(id)){
      this.numeros.delete(id);
    }else{
      this.numeros.add(id);
    }
   }
}
