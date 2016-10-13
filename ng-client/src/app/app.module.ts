import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import {NavigationModule} from './navigation'
import {ProjectModule} from './project'
import {EmployeeModule} from './employee'
import {TimesheetListModule} from './timesheet-list'
import {TimesheetNewModule} from './timesheet-new'
import {TimesheetModule} from './timesheet'
import {TimesheetEntryModule} from './timesheet-entry'
import {LoginModule} from './login'
import {ExtHttp} from './shared/extHttp.service';
import {ResponseHandler} from './auth/responseHandler.service';

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
    TimesheetListModule,
    TimesheetNewModule,
    TimesheetModule,
    TimesheetEntryModule,
    LoginModule
  ],
  providers: [ExtHttp, ResponseHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
