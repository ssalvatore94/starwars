import { Pipe, PipeTransform } from '@angular/core';
import { Character } from '../models/character';

@Pipe({
  name: 'characterFilter'
})
export class CharacterPipe implements PipeTransform {

  transform(characters: Character[], term: any): any {
    if(term===undefined||term===''){
      return characters;
    }
    return characters.filter(data=> {
      var character= data as Character
      return character.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }

}
