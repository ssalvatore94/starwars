import {
  Component, OnInit, Input, OnChanges, SimpleChange
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FilmService } from "../services/film.service";
import { StarshipService } from "../services/starship.service";
import { Starship } from "../models/starship";
import { Film } from "../models/film";
import { FilterPipe } from "../filter/filter.pipe";
import { Planet } from "../models/planet";
import { Character } from "../models/character";
import { PlanetService } from "../services/planet.service";
import { CharacterService } from "../services/character.service";


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
  planets: Planet[];
  planet: Planet;
  characters: Character[];
  character: Character;
  star: boolean = false;
  pla: boolean = false;
  cha:boolean = false;

  @Input() getTermFromMain: string;
  termForFilter: string;
  getTerm(term) {
    this.termForFilter = term;
  }


  constructor(
    private route: ActivatedRoute,
    private filmSrv: FilmService,
    private starshipSrv: StarshipService,
    private planetSrvc: PlanetService,
    private characterSrvc: CharacterService
  ) { }

  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    this.resetSearchTerm()
    this.loadStarships();
    console.log("Change detected:");
    console.log(this.myFilm);
  }
  loadStarships() {
    this.resetSearchTerm()
    this.star = true;
    this.cha= false;
    this.pla=false;
    this.findStarshipsOfFilm(this.myFilm.starships);
  }

  // getMyFilm() {
  //   console.log('lettura film da getmyfilm() '+this.myFilm);
  //   this.findStarshipsOfFilm(this.myFilm.starships as string[]);
  // }

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

  loadPlanet() {
    this.resetSearchTerm()
    this.star = false;
    this.pla=true;
    this.cha = false;
    this.findPlanetOfFilm(this.myFilm.planets);

  }
  findPlanetOfFilm(inputPlanet: string[]) {
    this.planets = []
    for (let i = 0; i < inputPlanet.length; i++) {
      console.log(inputPlanet[i]);
      this.planetSrvc.getPlanet(inputPlanet[i]).subscribe(data => {
        console.log(data)
        this.planets.push(data as Planet)
      })

    }

  }

  loadCharacter() {
    this.resetSearchTerm();
    this.star = false;
    this.pla=false;
    this.cha = true;
    this.findCharacterOfFilm(this.myFilm.characters)
  }
  findCharacterOfFilm(inputCharacter: string[]) {
    this.characters=[];
    for (let i = 0; i < inputCharacter.length; i++) {
      this.characterSrvc.getCharacter(inputCharacter[i]).subscribe(data=>
      this.characters.push(data as Character))
      
    }
  }
  resetSearchTerm(){
    this.termForFilter = '';
  }
}
