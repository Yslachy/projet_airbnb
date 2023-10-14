import { HttpClient } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/City';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  apiGouvURL = 'https://geo.api.gouv.fr/communes?nom=';
  villes: Array<City>;
  showCity: boolean
  @Output() searchCity: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private http: HttpClient) {}

  //Permet de faire un appel API à chaque nouvelle lettre tapé dans <input>
  //L'appel se fait sur une API gouvernementale qui renvoie un JSON avec toutes les 
  //villes de France dans un certains format.
  //Il faut donc créer une interface 'City' contenant les même champs que le JSON
  //pour faire un cast propre du JSON en tableau de ville que l'on pourra afficher
  //Comme http.get() renvoie un Observable, on peut subscribe pour qu'un nouvel appel
  //soit envoyé dès que le filtre de nom de ville (search) change.
  public onInputChange(search: any) {
    console.log('Input value : ', search.target.value);
    this.getCities(search.target.value);
    if (search) {
      this.showCity = true;
    }
  }

  getCities(search: string) {
    this.http.get<Array<City>>(this.apiGouvURL + search).subscribe((villes) => {
      this.villes = villes;
    });
  }

  //Lors du choix d'une ville on cache la div affichant les ville et on ajoute
  //des querryParams dans l'URL qui permettra au composant Home de savoir 
  //quls logements afficher.
  public onCityClick(ville: City): void {
    this.router.navigate(['/'], { queryParams: { city: ville.nom } });
    this.showCity = false;
  }

  public onLogoClick(): void {
    this.router.navigate(['/'])
  }
}
