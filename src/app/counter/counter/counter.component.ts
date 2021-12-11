import {Component} from '@angular/core'

@Component({
    selector:'app-counter',
    template:`
       <h1>{{title}}</h1>

<h3>La base es {{base}}</h3>

<button (click)="acumulate(-base)">-{{base}}</button>

<span>{{counter}}</span>

<button (click)="acumulate(base)">+{{base}}</button> 
    `
})

export class CounterComponent{
    title :   string='Counter App';
    counter:  number=10;
    base:     number=5;
  
    acumulate(value:number){
      this.counter+=value;
    }
}