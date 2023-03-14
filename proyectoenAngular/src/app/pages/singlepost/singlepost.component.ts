import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../Models/Post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.sass']
})
export class SinglepostComponent {

  objpost : Post = {
    userId : 0,
    id : 0,
    title : '',
    body : ''
  }

  constructor(private api : PostsService, private route : ActivatedRoute) {
    this.route.params.subscribe(params =>{
      console.log(params['id']);
      this.getSinglePost(params['id']);
    })
   }
   getSinglePost(id : number){
    this.api.getSinglePost(id).subscribe(
      data =>{
        console.log(data);
        this.objpost = data;
      }
    );
   }
}
