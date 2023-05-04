import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reunion } from '../models/Reunion';
import { Time } from '@angular/common';
import { MyViewResponse } from '../models/myViewResponse';

@Injectable({
  providedIn: 'root',
})
export class ReunionesService {
  constructor(private http: HttpClient) {}
  getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Token ' + (localStorage.getItem('token') || ''),
      }),
    };
  }
  getReuniones() {
   let httpOptions = this.getHttpOptions();
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
    let httpOptions = this.getHttpOptions();
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
    let httpOptions = this.getHttpOptions();
    return this.http.delete(
      'http://127.0.0.1:8000/reuniones/' + id + '/',
      httpOptions
    );
  }
  getReunionIndividual(id : number){
    let httpOptions = this.getHttpOptions();
    return this.http.get<Reunion>('http://127.0.0.1:8000/reuniones/'+id+'/', httpOptions);
  }
  getMisReuniones() {
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
  getMiID(){
    let httpOptions = this.getHttpOptions();
    return this.http.get<MyViewResponse>('http://127.0.0.1:8000/my-view/', httpOptions);
  }
}
