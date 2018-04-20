import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../models/film';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  selectedFilm:Film;
  inputTerm:string;
  constructor() { }

  ngOnInit() {
  }
  onFilmSelect(film:Film){
    this.selectedFilm = film;

  }
  getSearchTerm(term){
    console.log('term da mainComponent  ' +term);
    
    this.inputTerm = term
    
  }
  
 
}
