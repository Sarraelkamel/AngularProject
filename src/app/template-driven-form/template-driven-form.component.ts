import { Component, OnInit } from '@angular/core';
import { Driven } from '../Core/Driven';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  dri !: Driven
  constructor() { }

  ngOnInit(): void {
    this.dri = new Driven();
  }


  ajouter(){
    console.log(this.dri)
  }

}
