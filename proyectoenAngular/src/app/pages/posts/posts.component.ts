import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from '../../Models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent {
  posts : Post[] = [];
  constructor(private api : PostsService) { 
    this.getListaPosts();
  }
  getListaPosts(){
    this.api.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
}
