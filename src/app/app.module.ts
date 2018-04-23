import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilmService } from './services/film.service';
import { HttpClientModule } from '@angular/common/http';
import { ContentComponent } from './content/content.component';
import { StarshipService } from './services/starship.service';
import { StarshipComponent } from './content/starship/starship.component';
import { FilterPipe } from './filter/filter.pipe';
import { MainContentComponent } from './main-content/main-content.component';
import { PlanetComponent } from './content/planet/planet.component';
import { CharacterComponent } from './content/character/character.component';
import { PlanetService } from './services/planet.service';
import { CharacterService } from './services/character.service';
import { StrashipPipe } from './filter/straship.pipe';
import { CharacterPipe } from './filter/character.pipe';
import { PlanetPipe } from './filter/planet.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    StarshipComponent,
    FilterPipe,
    MainContentComponent,
    PlanetComponent,
    CharacterComponent,
    StrashipPipe,
    CharacterPipe,
    PlanetPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmService, StarshipService,PlanetService, CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
