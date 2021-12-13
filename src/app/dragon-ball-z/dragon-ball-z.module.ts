import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';
import { DragonBallZService } from './services/dragon-ball-z.service';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ],
  providers:[
    DragonBallZService
  ]
})
export class DragonBallZModule { }
