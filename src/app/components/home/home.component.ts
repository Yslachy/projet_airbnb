import { Component, Input, OnInit } from '@angular/core';
import { Logement } from 'src/app/models/Logement';
import { Observable, of } from 'rxjs';
import { GetAccomodationsService } from 'src/app/services/get-accomodations.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  logements$: Observable<Array<Logement>>; //le '$' est une convention de nommage des Observables
  myInput: string = '';
  @Input() citySelected: string;

  filteredAccomodations: Array<Logement>;

  constructor(
    private route: ActivatedRoute,
    private accomodationService: GetAccomodationsService
  ) {} //le constructor permet l'injection services et dépendances

  ngOnInit(): void {
    //getAccomodation renvoie un observable ce qui nous permet de nous abonner
    //cad qu'a chaque changement au niveau de l'objet renvoyé par getAccomodation
    //(tableau de logement dans notre cas), subscribe renvoie le contenu "accomodations"
    //NB: On ne peut subscrive que des Observable
    this.accomodationService.getAccomodation().subscribe((accomodations) => {
      //queryParams permet de s'abonner au niveau des queryParams présents dans l'URL
      //qui sont enfait des dictionnaires "?clé=valeur"
      this.route.queryParams.subscribe((params) => {
        const cityParams = params['city'];
        if (cityParams) {
          this.filteredAccomodations = accomodations.filter((accomodation) => {
            return accomodation.city.name == cityParams;
          });
        } else {
          this.filteredAccomodations = accomodations;
        }
      });
    });
  }
}
