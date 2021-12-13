import { Component} from '@angular/core';
import { DragonBallZService } from '../services/dragon-ball-z.service';



@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  })
export class CharactersComponent  {
  
//  @Input() characters: any[]=[];//comes from parent component

  get characters(){
    return this.dbzService.characters;
  }

  constructor(private dbzService: DragonBallZService){}
}
