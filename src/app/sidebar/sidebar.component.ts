import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private filmSrv: FilmService
  ) { }

  films: Film[] = []
  @Output() selectFilm = new EventEmitter<Film>();


  ngOnInit() {
    this.filmSrv.getAllFilm().subscribe(data => {
      console.log(data['results']);
      this.films = data['results'] as Film[]
    });
  }

  onFilmSelect(film: Film) {
    this.selectFilm.emit(film);
  }

}
