import { Component, Input, OnInit } from '@angular/core';
import { Logement } from 'src/app/models/Logement';

@Component({
  selector: 'app-card', //selectur pouvant être appelé dans html d'un autre coposant parent comme "home"
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  //permet d'accéder à la variable logment du composant parent (home)
  //car il n'y a pas d'héritage entre composant a part de cette manière
  //De même pour les fonctions qui ne sont acccessibles que dans le composant courant
  @Input() logement : Logement; 

  //fonction de redirection vers les détails des logements (non implémentée)
  openWindow() {
    const newWindowURL = 'localhost:4200/';
    window.open(newWindowURL);
  }

}
