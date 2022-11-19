import { Component, OnInit } from '@angular/core';
import { Emploi } from '../Core/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listeEmploi : Emploi[]=[]
  nbr!: number
  searchText !: string
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi= [
      {reference: '1', titre: 'poste 1', entreprise: 'esprit', etat: false},
      {reference: '2', titre: 'poste 2', entreprise: 'sopra', etat: true},
    ]
  }

  Bilan(){

    this.nbr=0
    for (let i=0;i<this.listeEmploi.length;i++)
    {

      if(this.listeEmploi[i].etat==true) this.nbr++
       
    }
  }

  Search(){
    this.listeEmploi = this.listeEmploi.filter((x)=>x.entreprise.match(this.searchText))
    

  }
  }


