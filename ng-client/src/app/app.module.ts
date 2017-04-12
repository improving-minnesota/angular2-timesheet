import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavigationModule } from './navigation';
import { ProjectModule } from './project';
import { EmployeeModule } from './employee';
import { TimesheetModule } from './timesheet';
import { LoginModule } from './login';
import { CoreModule } from './core';

import { MaterialModule } from '@angular/material';

import { ExtHttpConfig } from './core/ExtHttpConfig';

import 'hammerjs';

const host = window.location.hostname;
let baseUrl = 'https://localhost:8080';

if (host === 'localhost') {
  baseUrl = 'http://localhost:4000';
}

const extHttpConfig = {
  url: baseUrl
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    HttpModule,
    LoginModule,
    MaterialModule,
    NavigationModule,
    ProjectModule,
    routing,
    TimesheetModule,
    CoreModule.forRoot(extHttpConfig),
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
