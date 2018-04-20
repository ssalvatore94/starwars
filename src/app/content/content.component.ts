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

  @Input() getTermFromMain:string;
  termForFilter:string;
 


  constructor(
    private route: ActivatedRoute,
    private filmSrv: FilmService,
    private starshipSrv: StarshipService
  ) { }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {

    console.log("Change detected:");
    console.log(this.myFilm);
    if (this.myFilm !== undefined) {
      this.findStarshipsOfFilm(this.myFilm.starships);
    }
  }

  getMyFilm() {
    console.log('lettura film da getmyfilm() '+this.myFilm);
    this.findStarshipsOfFilm(this.myFilm.starships as string[]);
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
}
