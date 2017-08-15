/**
 * TODO: Configure your module so that is aware of the new project list component.
 *
 * 1. Import new dependencies.
 * 2. Add new dependencies to the module imports lists.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';

// TODO: #1

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    // TODO: #2
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
