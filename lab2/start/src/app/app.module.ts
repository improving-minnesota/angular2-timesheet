/**
 * TODO: Import the new EmployeeModule an add it to the module configuration.
 *
 * 1. Import the employee module.
 * 2. Add the employee module to as a module dependency.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  Router
} from '@angular/router';

import { AppComponent } from './app.component';

import { IdentityService } from './core/identity.service';
import { LocalStorage } from './core/localStorage';
import { LoginService } from './core/login.service';
import { ResponseHandler } from './core/responseHandler.service';
import { ExtHttp } from './core/extHttp.service';

import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './core/navigation.component';
import { ProjectModule } from './project/project.module';
import { LoginRoutingModule } from './core/login-routing.module';
// TODO #1

@NgModule({
  imports: [
    BrowserModule,
    ProjectModule,
    // TODO #2
    LoginRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ExtHttp,
    IdentityService,
    LocalStorage,
    LoginService,
    ResponseHandler,
  ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
