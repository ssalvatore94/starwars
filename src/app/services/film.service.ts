import {HttpClient} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Film } from '../models/film';
const url = 'https://swapi.co/api/'
@Injectable()
export class FilmService {
  selectedFilm:number;
  constructor(private http:HttpClient) { }
  getAllFilm(){

  return this.http.get(url+'films');

  }
  getFilm(id){
  return  this.http.get(url+'films/'+id)

  }
}
