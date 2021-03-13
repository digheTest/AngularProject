import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExtraSpace1Component } from './extra-space1/extra-space1.component';
import { ExtraSpace2Component } from './extra-space2/extra-space2.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtraSpace1Component,
    ExtraSpace2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
