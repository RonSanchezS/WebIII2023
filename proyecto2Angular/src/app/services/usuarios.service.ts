import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { MyViewResponse } from '../models/myViewResponse';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}
  getUsuarios() {
    let token = localStorage.getItem('token');

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + (token || ''),
      }),
    };
    return this.http.get<Usuario[]>(
      'http://127.0.0.1:8000/usuarios/',
      httpOptions
    );
  }
  httpOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + localStorage.getItem('token'),
      }),
    }
  }
  getMyID() {
    return  this.http.get<MyViewResponse>('http://127.0.0.1:8000/my-view/', this.httpOptions());
  }
  createUsuario(username: string, password: string, email: string) {
    return this.http.post('http://127.0.0.1:8000/usuarios/', {
      username,
      password,
      email,
    });
  }
  getMyUsername(id : number){
    return  this.http.get<Usuario>('http://127.0.0.1:8000/usuarios/'+id, this.httpOptions());

  }
}
