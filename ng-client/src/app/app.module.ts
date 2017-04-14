import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {
  Router
} from '@angular/router';

// import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ProjectModule } from './project';
import { EmployeeModule } from './employee/';
import { CoreModule } from './core';

import 'hammerjs';

import { MaterialModule } from '@angular/material';

import { ExtHttpConfig } from './core/ExtHttpConfig';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './core/login.component';
import { LoginRoutingModule } from './core/login-routing.module';
import { PageNotFoundComponent } from './core/not-found.component';
import { NavigationComponent } from './core/navigation.component';
import { TimesheetModule } from './timesheet/timesheet.module';

const host = window.location.hostname;
let baseUrl = 'https://localhost:8080';

if (host === 'localhost') {
  baseUrl = 'http://localhost:4000';
}

const extHttpConfig = {
  url: baseUrl
};

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    HttpModule,
    FormsModule,
    CoreModule.forRoot(extHttpConfig),
    EmployeeModule,
    ProjectModule,
    TimesheetModule,
    LoginRoutingModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    NavigationComponent,
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
