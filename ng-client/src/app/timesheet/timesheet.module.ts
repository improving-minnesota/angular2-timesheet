import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'
import {MaterialModule} from '@angular/material';

import {TimeUnitsModule} from '../time-units'
import {IdentityService} from '../auth'

import TimesheetService from './timesheet.service'
import {TimesheetComponent} from './timesheet.component'
import {TimesheetNewComponent} from './timesheet-new';
import {TimesheetListComponent} from './timesheet-list';
import {TimesheetDetailComponent} from './timesheet-detail';
import {TimesheetEntryComponent} from './timesheet-entry';
import {TimesheetCompletePipe} from './timesheet-detail/timesheet-complete.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {TimeUnitService} from '../time-units';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetListComponent,
    TimesheetNewComponent,
    TimesheetEntryComponent,
    TimesheetCompletePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    TimeUnitsModule,
    RouterModule,
    TimeUnitsModule
  ],
  providers: [TimesheetService, IdentityService, TimeUnitService]
})
export class TimesheetModule {
}
