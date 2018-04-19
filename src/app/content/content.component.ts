import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmService } from "../services/film.service";
import { StarshipService } from "../services/starship.service";
import { Starship } from "../models/starship";
import { Film } from "../models/film";
import { FilterPipe } from "../filter/filter.pipe";


@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],

})
export class ContentComponent implements OnChanges {
 
  @Input() myFilm: Film;
  //@Input() searchTerm:string;
  id: number;
  private sub: any;
  starships: Starship[];
  starship: Starship;
  filmStarships: Starship[];
  
  searchTerm:string;
  searchName(searchTerm){
    console.log('searchName : '+searchTerm );    
    this.searchTerm=searchTerm;
  }


  constructor(
    private route: ActivatedRoute,
    private filmSrv: FilmService,
    private starshipSrv: StarshipService
  ) { }
  getMyFilm() {
    console.log(this.myFilm);
    this.findStarshipsOfFilm(this.myFilm.starships as string[]);
  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {

    console.log("Change detected:");
    console.log(this.myFilm);
    if (this.myFilm !== undefined) {
      this.findStarshipsOfFilm(this.myFilm.starships);
    }
  }
  findStarshipsOfFilm(inputStarships: string[]) {
    this.starships = [];
    for (let i = 0; i < inputStarships.length; i++) {
      console.log(inputStarships[i]);
      this.starshipSrv.getStarship(inputStarships[i]).subscribe(sh => {
        console.log(sh);
        this.starships.push(sh as Starship);
      });
    }
  }


  /*
  ngOnInit() {
    this.getMyFilm();*/
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
  // }
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


}
