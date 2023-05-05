import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root',
})
export class PersonasService {
  constructor(private http: HttpClient) {}
  savePersona(persona: Persona) {
    const formParams = new FormData();
    formParams.append('nombre', persona.nombres);
    formParams.append('apellidos', persona.apellidos);
    formParams.append('edad', persona.edad.toString());
    formParams.append('ciudad', persona.ciudad);
    formParams.append('fechaNacimiento', persona.fechaNacimiento);
    return this.http.post<Persona>(
      'http://personas.jmacboy.com/personas/',
      formParams
    );
  }
  getListaPersonas() {
    return this.http.get<Persona[]>(
      'http://personas.jmacboy.com/personas/'
    );
  }
  getPersona(id : number){
    return this.http.get<Persona>("http://personas.jmacboy.com/personas/"+id)
  }
  updatePersona(objPersona : Persona){
    const formParams = new FormData();
    
  }
}
