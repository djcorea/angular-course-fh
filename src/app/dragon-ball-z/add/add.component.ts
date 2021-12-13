import { EventEmitter } from '@angular/core';
import { Component, Input, Output} from '@angular/core';

import { Character } from '../interfaces/dbz.interface';
import { DragonBallZService } from '../services/dragon-ball-z.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent  {
  
   @Input() newCharacter: Character={
    name:'',
    power:0
  };

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService:DragonBallZService){}
  addCharacter(){
    if (this.newCharacter.name.trim().length===0) {
      return;
    }

    // this.onNewCharacter.emit(this.newCharacter);
    this.dbzService.addCharacter(this.newCharacter)
    
    this.newCharacter={name:'',power:0};
  }

}
