//On blur event
import { Component } from '@angular/core';

@Component({
  selector: 'on-blur',
  template: `
   <input #box
      (keyup.enter)="update(box.value)"
      (blur)="update(box.value)">
    <p>{{value}}</p>
  `
})
export class onBlurComponent {
 value = '';
  update(value: string) { this.value = value; }
  
}