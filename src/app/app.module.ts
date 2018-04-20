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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    StarshipComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmService, StarshipService],
  bootstrap: [AppComponent]
})
export class AppModule { }
