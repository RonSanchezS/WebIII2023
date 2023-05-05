import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../models/token';
import { TokenError } from '../models/tokenError';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

   
  constructor(private http : HttpClient) { }
  getToken(username : string, password : string){
    return this.http.post<Token>('http://127.0.0.1:8000/api-token-auth/', {
      username, password
    }, )

  }
}
