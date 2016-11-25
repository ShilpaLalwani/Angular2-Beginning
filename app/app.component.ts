/*ngfor for fatching data from another class*/

import { Component } from '@angular/core';
import  { Hero }  from './hero';

@Component({
  selector: 'my-app',
  template: `<h2>My favorite hero is: {{myHero.name}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
    <p *ngIf="heroes.length > 3">There are many heroes!</p>`,
})
export class AppComponent  {  heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
myHero = this.heroes[0]; }

