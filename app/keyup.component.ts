//Get user input from the $event object	
import { Component } from '@angular/core';

@Component({
  selector: 'key-up',
  template: `
  
    <input (keyup)="onKey($event)">
    {{value}}`
})
export class keyUpComponent {
  clickMessage = '';
  value='';
  onKey(event:any){
  this.value += event.target.value + ' | ';
  }
 
}