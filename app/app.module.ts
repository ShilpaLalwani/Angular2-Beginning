import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ClickMeComponent } from './click-me.component'
import { keyUpComponent } from './keyup.component'
import { loopBackComponent } from './loop-back.component'
import { keyUpEnterComponent } from './keyupenter.component'
import { onBlurComponent } from './onblur.component'
import { LittleTourComponent } from './little-tour.component'
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ,ClickMeComponent,keyUpComponent,loopBackComponent,keyUpEnterComponent,onBlurComponent, LittleTourComponent ],
  bootstrap:    [ AppComponent,ClickMeComponent,keyUpComponent,loopBackComponent ,keyUpEnterComponent,onBlurComponent ,LittleTourComponent]
})
export class AppModule { }
