import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import {NavigationModule} from './navigation'
import {ProjectListModule} from './project-list'
import {ProjectNewModule} from './project-new'
import {EmployeeListModule} from './employee-list'
import {EmployeeNewModule} from './employee-new'
import {TimesheetListModule} from './timesheet-list'
import {TimesheetNewModule} from './timesheet-new'
import {TimesheetModule} from './timesheet'
import {TimesheetEntryModule} from './timesheet-entry'
import {LoginModule} from './login'
//import {SharedModule} from './shared'
import {ExtHttp} from './shared/extHttp.service';
import {ResponseHandler} from './auth/responseHandler.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NavigationModule,
    ProjectListModule,
    ProjectNewModule,
    EmployeeListModule,
    EmployeeNewModule,
    TimesheetListModule,
    TimesheetNewModule,
    TimesheetModule,
    TimesheetEntryModule,
    LoginModule
    //SharedModule
  ],
  providers: [ExtHttp, ResponseHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
