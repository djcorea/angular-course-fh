import { Component,} from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DragonBallZService } from '../services/dragon-ball-z.service';




@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent  {

 
  
  newCharacter : Character={
    name:"Truncks",
    power:7000
  }

 
}

//$('.gradeA option').removeAttr('selected').filter('[value=3]').attr('selected',true).change()
// add(event:any){
//   event.preventDefault();
//   console.log(event);
// } works but there's better way
