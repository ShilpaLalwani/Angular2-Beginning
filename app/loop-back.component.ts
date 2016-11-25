//Get user input from a template reference variable	
import { Component } from '@angular/core';

@Component({
  selector: 'loop-back',
  template: `
  
    <input #box (keyup)="0">
    {{box.value}}`
})
export class loopBackComponent {
  
}