//Key event filtering (with key.enter)

import { Component } from '@angular/core';

@Component({
  selector: 'key-up-enter',
  template: `
  
    <input #box (keyup.enter)="onKey((box.value))">
    {{value}}`
})
export class keyUpEnterComponent {
  clickMessage = '';
  value='';
  onKey(value :string ){
  this.value =value;
  }
  
}