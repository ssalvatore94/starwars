import { Pipe, PipeTransform } from '@angular/core';
import { Starship } from '../models/starship';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(starships: Starship[], term: any): any {
    if (term ===undefined){
      return starships;
    }
    return starships.filter((data)=>{
      var starship = data as Starship
      return starship.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    }
  )
      
  }

}
