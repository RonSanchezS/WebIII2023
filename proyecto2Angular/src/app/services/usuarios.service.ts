import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

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
  createUsuario(username: string, password: string, email: string) {
    return this.http.post('http://127.0.0.1:8000/usuarios/', {
      username,
      password,
      email,
    });
  }
}
