import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { ProjectModule } from './project/project.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    ProjectModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
