import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmService } from "../services/film.service";
import { StarshipService } from "../services/starship.service";
import { Starship } from '../models/starship';
import { Film } from "../models/film";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(
    private route: ActivatedRoute,
    private filmSrv: FilmService,
    private starshipSrv: StarshipService
  ) {}
  starships: Starship[];
  starship: Starship;

  @Input() myFilm: Film;

  ngOnInit() {
    /*versione 1
    this.sub = this.route.params.subscribe(param => {
      this.id =+ param['id'];
     console.log('parametro ricevuto '+ this.id);
    })
    this.filmSrv.getFilm(this.id).subscribe(data=>
      {console.log('content log di film ');
      console.log(data.starships);
      console.log(data.starships.length);
      for (let i = 0; i < data.starships.length; i++) {
        console.log(data.starships[i]);
        this.starshipSrv.getStarship(data.starships[i])
        .subscribe(dato => {console.log(dato);
          this.staships = dato as Starship[];
        })
      }
    })*/
    //this.id = this.route.params['id']
    /* vedere quando cambia l id
    this.sub = this.route.params.subscribe(param => {
      this.id =+ param['id'];
     console.log('parametro ricevuto '+ this.id);
      this.loadStarship()
    });*/
    /*metodo funzionante*/
    /*
    this.filmSrv.getFilm(this.id).subscribe(data=>
      {console.log('content log di film ');
      console.log(data.starships);
      console.log(data.starships.length);
      this.starships=[];
      for (let i = 0; i < data.starships.length; i++) {
        console.log(data.starships[i]);
        this.starshipSrv.getStarship(data.starships[i])
        .subscribe(sh => {console.log(sh);
          this.starships.push(sh as Starship);
      });
      console.log('leggo array');

      console.log(this.starships)

      }
    });*/
  }
  /*
  loadStarship(){
    this.filmSrv.getFilm(this.id).subscribe(data=>
      {console.log('content log di film ');
      console.log(data.starships);
      console.log(data.starships.length);
      this.starships=[];
      for (let i = 0; i < data.starships.length; i++) {
        console.log(data.starships[i]);
        this.starshipSrv.getStarship(data.starships[i])
        .subscribe(sh => {console.log(sh);
          this.starships.push(sh as Starship);
      });
      console.log('leggo array');

      console.log(this.starships)

      }

   }
  }*/
  findStarshipsOfFilm(inputStarships:Starship[]){
    this.starships=[];
    for (let i = 0; i < inputStarships.length; i++) {
      console.log(inputStarships[i]);
      this.starshipSrv.getStarship(inputStarships[i])
      .subscribe(sh => {console.log(sh);
        this.starships.push(sh as Starship);
    });


  }

  }
}
