import { Component, OnInit } from '@angular/core';
import { Persona } from '../../models/Persona';
import { PersonasService } from '../../services/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listapersonas',
  templateUrl: './listapersonas.page.html',
  styleUrls: ['./listapersonas.page.scss'],
})
export class ListapersonasPage implements OnInit {
  personas : Persona[] = [];
  constructor(private api : PersonasService, private router : Router) { }

  ngOnInit() {
  }
  getPersonaList(){
    this.api.getListaPersonas().subscribe(
      (data)=>{
        this.personas = data;
      }
    );
  }
  editPersona(persona : Persona){
    this.router.navigateByUrl('/persona/'+persona.id);
  }

}
