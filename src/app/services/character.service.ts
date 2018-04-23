import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CharacterService {

  constructor(private http: HttpClient) { }
  getCharacter(url){
    return this.http.get(url);
  }


}
