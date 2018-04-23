import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../models/planet';

@Pipe({
  name: 'planetFilter'
})
export class PlanetPipe implements PipeTransform {

  transform(planets: Planet[], term: any): any {
    if(term === undefined || term ===''){
      return planets
    }
    return planets.filter(data => {
      var planet= data as Planet;
      return planet.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }

}
