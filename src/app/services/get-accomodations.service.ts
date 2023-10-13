import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logement } from '../models/Logement';

@Injectable({
  providedIn: 'root'
})

export class GetAccomodationsService {

  myInput: string = '';
  
  private dataBaseURL: string = "http://localhost:3000/api/accomodations"

  constructor(private http: HttpClient) {}

  getAccomodation() {
    //le get fait un appel API vers l'URL spécifié qui retourne un JSON
    //Le cast <Array<Logement>> permet de transformer directement le JSON
    //au format de l'interface "Logement" créé.
    //Il faut cependant que les attributs de logement soit aient exactement 
    //les mêmes sinon il faut passer par un "mapper" permettant de dire
    //quel champs du JSON correspond à quel attribut de l'interface
    return this.http.get<Array<Logement>>(this.dataBaseURL);
  }
}
