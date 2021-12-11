import { Component } from "@angular/core";

@Component({
    selector:'app-hero',
    templateUrl:'./hero.component.html'
})

export class HeroComponent{
    name: string="IronMan"; 
    age: number=23;  

    get capitalizedName(): string{
        return this.name.toUpperCase();
    }
    getName(): string{
        return `${this.name}- ${this.age}`;//``literal template
    }

    changeName():void{
        this.name="SpiderMan"; 
    }

    changeAge(): void{
        this.age=30;    
    }
}