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

@NgModule({
  imports: [
    BrowserModule,
    ProjectModule,
    // import the new employee module
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
