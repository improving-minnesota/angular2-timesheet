import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

// import new dependencies

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    // add new module dependencies
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
