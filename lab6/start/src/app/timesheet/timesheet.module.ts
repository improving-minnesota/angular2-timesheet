/*
 * GOAL: To import the TimesheetStatusPipe and declare it so it usable throughout the module
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdSelectModule,
} from '@angular/material';

import { TimeUnitsModule } from '../time-units/time-units.module';
import { TimeUnitService } from '../time-units/timeunit.service';
import { IdentityService } from '../core';

import { TimesheetService } from './timesheet.service';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetNewComponent } from './timesheet-new/timesheet-new.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';
import { TimesheetEntryComponent } from './timesheet-entry/timesheet-entry.component';
// TODO 1 - import the TimesheetStatusPipe
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetEntryComponent,
    TimesheetListComponent,
    TimesheetNewComponent,
    // TODO 2 - declare the TimesheetStatusPipe
  ],
  imports: [
    CommonModule,
    MdListModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdProgressSpinnerModule,
    ReactiveFormsModule,
    TimeUnitsModule,
    MdSelectModule,
    RouterModule,
  ],
  providers: [
    TimesheetService,
    TimeUnitService,
  ],
})
export class TimesheetModule {}
