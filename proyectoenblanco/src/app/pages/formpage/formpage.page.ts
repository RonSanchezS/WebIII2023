import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formpage',
  templateUrl: './formpage.page.html',
  styleUrls: ['./formpage.page.scss'],
})
export class FormpagePage implements OnInit {

  nombres : string = "";
  apellidos : string = "";
  
  constructor() { }

  ngOnInit() {
  }
  enviardatos(){
    
  }
  
}
