import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StarshipComponent } from './content/starship/starship.component';
import { CharacterComponent } from './content/character/character.component';
import { PlanetComponent } from './content/planet/planet.component';

const routes:Routes = [
  { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'dashboard', component: NavbarComponent },
  // { path:'starships', component: StarshipComponent },
  // //{ path:'planets', component: PlanetComponent},
  // { path:'cheracters', component:CharacterComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
