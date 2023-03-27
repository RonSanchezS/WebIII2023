import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/Posts';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.page.html',
  styleUrls: ['./singlepost.page.scss'],
})
export class SinglepostPage implements OnInit {
  objPost : Post = {
    userId : 0,
    id : 0,
    title : "",
    body : ""
  }

  constructor(private http : HttpClient, private route : ActivatedRoute, private api : PostsService) {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.getPost(params['id']);
    });
   }

  ngOnInit() {
  }

  getPost(id : number){
    return this.api.getPost(id).subscribe((data : Post) => {
      this.objPost = data;
    }
    );
  }

}
