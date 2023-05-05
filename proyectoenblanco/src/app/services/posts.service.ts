import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }

  getListaPosts(){
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
  getPost(id : number){
    return this.http.get<Post>("https://jsonplaceholder.typicode.com/posts/" + id);
  }
}
