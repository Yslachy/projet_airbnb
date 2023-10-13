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

  public onCityClick(ville: City): void {
    this.router.navigate(['/'], { queryParams: { city: ville.nom } });
    this.showCity = false;
  }

  public onLogoClick(): void {
    this.router.navigate(['/'])
  }
}
