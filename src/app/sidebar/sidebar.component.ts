import { Component, OnInit, Input } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../models/film';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private filmSrv:FilmService, private router:Router) { }
  films:Film[]=[]
  selectedFilm: Film;
  ngOnInit() {
    this.filmSrv.getAllFilm().subscribe(data=>{
      console.log(data.results);

      this.films=data.results as Film[]})

  }/*
  readMe(id_episode){
    console.log(id_episode);
    var id:number;
    if(id_episode==1){
      id=4
    }
    if(id_episode==2){
      id=5
    }
    if(id_episode==3){
      id=6
    }
    if(id_episode==4){
      id=1
    }
    if(id_episode==5){
      id=2
    }
    if(id_episode==6){
      id=3
    }
    if(id_episode==7){
      id=7
    }
    console.log('id: '+id);
    //this.filmSrv.selectedFilm= id;
    this.router.navigate(['starship',id])

  }*/
  selectFilm(film:Film){
    console.log('cliccato');
    console.log(film)

    this.selectedFilm = film;
    console.log(this.selectedFilm);

  }

}
