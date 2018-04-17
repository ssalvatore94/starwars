import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StarshipService {

  constructor(private http:HttpClient) { }

  getStarship(url){
    return this.http.get(url);
  }

}
