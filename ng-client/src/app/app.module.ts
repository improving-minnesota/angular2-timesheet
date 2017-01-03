import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import {NavigationModule} from './navigation'
import {ProjectModule} from './project'
import {EmployeeModule} from './employee'
import {TimesheetModule} from './timesheet'
import {LoginModule} from './login'
import {ExtHttp} from './shared/extHttp.service';
import {ResponseHandler} from './auth/responseHandler.service';
import {MdIconRegistry} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    NavigationModule,
    ProjectModule,
    EmployeeModule,
    TimesheetModule,
    LoginModule
  ],
  providers: [ExtHttp, ResponseHandler, MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
