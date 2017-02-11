import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';

const AppModule = NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
}).Class({
  constructor: function() {}
});

export default AppModule;
