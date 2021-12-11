import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  
  heroes: string[]=["Hulk","Deadpool","Ironman","Spiderman"];
  
  deletedHero: string='';
  
  deleteHero(){
     this.deletedHero= this.heroes.shift()||'';
  }

}
