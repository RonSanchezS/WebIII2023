import { Component, OnInit } from '@angular/core';
import { Post } from '../../../../../proyectoenAngular/src/app/Models/Post';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listsaposts',
  templateUrl: './listsaposts.page.html',
  styleUrls: ['./listsaposts.page.scss'],
})
export class ListsapostsPage implements OnInit {
  loading : boolean = true;
  posts: Post[] = [];

  constructor(private api : PostsService, private router : Router) {
    this.getListaPosts();
   }

  ngOnInit() {
  }

  navegarPost(id : number){
    this.router.navigate([`singlepost/${id}`]);
  }
  

  getListaPosts(){
    this.loading = true;
    this.api.getListaPosts().subscribe((data : Post[]) => {
      this.posts = data;
      this.loading = false;
    });
  }

}
