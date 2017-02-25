import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import {NavigationModule} from './navigation';
import {ProjectModule} from './project';
import {EmployeeModule} from './employee';
import {TimesheetModule} from './timesheet';
import {LoginModule} from './login';
import {ExtHttp} from './shared/extHttp.service';
import {ResponseHandler} from './auth/responseHandler.service';
import 'hammerjs';
import { MaterialModule } from '@angular/material';

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
  ],
  providers: [ExtHttp, ResponseHandler],
  bootstrap: [AppComponent],
})
export class AppModule { }
