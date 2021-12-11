import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from './list/list.component';

@NgModule({
    declarations:[
        HeroComponent,
        ListComponent
    ],
    exports:[//to be used in other places
        ListComponent
    ],
    imports:[//usually, just moduls
        CommonModule
    ]
})

export class HeroesModule{

}