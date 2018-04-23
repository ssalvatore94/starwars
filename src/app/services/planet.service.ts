import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlanetService {

  constructor(private http:HttpClient ) { }
  getPlanet(url){
    return this.http.get(url);
  }

}
