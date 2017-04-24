import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import {
  Router
} from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core';

import { ExtHttpConfig } from './core/ExtHttpConfig';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './core/login.component';
import { LoginRoutingModule } from './core/login-routing.module';
import { NavigationComponent } from './core/navigation.component';

import { ProjectModule } from './project/project.module';
import { TimesheetModule } from './timesheet/timesheet.module';
import { EmployeeModule } from './employee/employee.module';

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
    CoreModule.forRoot(extHttpConfig),
    ProjectModule,
    TimesheetModule,
    EmployeeModule,
    LoginRoutingModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
