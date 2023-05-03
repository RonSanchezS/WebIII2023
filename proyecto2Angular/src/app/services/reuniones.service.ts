import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reunion } from '../models/Reunion';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ReunionesService {
  constructor(private http: HttpClient) {}

  getReuniones() {
    let token = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + (token || ''),
      }),
    };
    return this.http.get<Reunion[]>(
      'http://127.0.0.1:8000/reuniones/',
      httpOptions
    );
  }
  createReunion(
    nombre: string,
    fecha: string,
    hora: string,
    dueño: number,
    integrantes: number[]
  ) {
    let token = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + (token || ''),
      }),
    };
    return this.http.post(
      'http://127.0.0.1:8000/reuniones/',
      {
        nombre,
        fecha,
        hora,
        dueño,
        integrantes,
      },
      httpOptions
    );
  }
  deleteReunion(id: number) {
    let token = localStorage.getItem('token');
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + (token || ''),
      }),
    };
    return this.http.delete(
      'http://127.0.0.1:8000/reuniones/' + id + '/',
      httpOptions
    );
  }
  getReunionIndividual(id : number){
    return this.http.get<Reunion>('http://127.0.0.1:8000/reuniones/'+id+'/');
  }
}
