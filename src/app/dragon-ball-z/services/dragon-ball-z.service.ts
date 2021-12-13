import { Injectable } from "@angular/core";
import { Character } from '../interfaces/dbz.interface';


@Injectable() 
export class DragonBallZService{
    
    private _characters:Character[]=[
        {
          name:"Goku",
          power:10000
        },
        {
          name:"Vegeta",
          power:8000
        }
    ];

    get characters(): Character[]{
        return [...this._characters];//cut reference
    }
      
    constructor(){
        console.log("Service initialized");
    }

    addCharacter(character: Character){
        this._characters.push(character);
    }
}