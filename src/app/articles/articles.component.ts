import { Component, OnInit } from '@angular/core';
import { articles } from '../Core/articles';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  titres = ""
  listeArticles : articles[]=[]
  nbr!: number
  nbt!:string
  constructor() { }

  ngOnInit(): void {

    this.titres = "Les articles du jour"
    this.listeArticles = [  
      {titre:'Le championnat du monde',contenu:'Le champion du monde de cette année est .....',auteur:'Med Taher',date:'12/12/2005',categorie:'Sport'},
      {titre:'Les nouveaux parents',contenu:'Les nouveaux parents. ..',auteur:'Ahmed Said',date:'11/11/2018',categorie:'Education'},
      {titre:'Comment écrire votre CV',contenu:'Pour réussir à décraucher un emploi...',auteur:'Marie Elsa',date:'02/04/2017',categorie:'Travail'},
      
      
    ]
  }


  nbArticles(){

    this.nbr=0
    for (let i=0;i<this.listeArticles.length;i++)
    {

      if(this.listeArticles[i].categorie!="Travail") this.nbr++
       
    }
    
  }

  testvalue(){

    

    
  }


}
