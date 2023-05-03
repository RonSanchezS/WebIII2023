import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { Persona } from '../../models/Persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.page.html',
  styleUrls: ['./formpage.page.scss'],
})
export class FormpagePage implements OnInit {
  nombres: string = '';
  apellidos: string = '';
  edad: number = 0;
  ciudad: string = '';
  fechaNacimiento: string = '';
  id = 0;
  constructor(private api: PersonasService, private routes: ActivatedRoute) {
    this.routes.queryParams.subscribe((params) => {
      if (params && params['id']) {
        console.log(params['id']);
        this.id = params['id'];
        this.loadPersona(params['id']);
      }
    });
  }

  loadPersona(id: number) {
    this.api.getPersona(id).subscribe((data) => {
      this.nombres = data.nombres;
      this.apellidos = data.apellidos;
      this.edad = data.edad;
      this.ciudad = data.ciudad;
      this.fechaNacimiento = data.fechaNacimiento;
    });
  }
  ngOnInit() {}
  enviardatos() {
    if (this.id > 0) {
      this.updatePersona();
      return;
    }
    this.createPersona();
  }

  updatePersona(){
    this.api
        .updatePersona({
          nombres: this.nombres,
          apellidos: this.apellidos,
          edad: this.edad,
          ciudad: this.ciudad,
          fechaNacimiento: this.fechaNacimiento,
        })
        .subscribe((data: any) => {
          console.log(data);
        });
  }

  createPersona(){
    this.api
        .savePersona({
          nombres: this.nombres,
          apellidos: this.apellidos,
          edad: this.edad,
          ciudad: this.ciudad,
          fechaNacimiento: this.fechaNacimiento,
        })
        .subscribe((data: any) => {
          console.log(data);
        });
  }
}
