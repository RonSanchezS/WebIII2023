import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) {

  }
  getPosts(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getSinglePost(id : number){
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/'+id);
  }
}
