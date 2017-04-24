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
} from '@angular/material';

import { TimeUnitsModule } from '../time-units/time-units.module';
import { IdentityService } from '../core';

import { TimesheetService } from './timesheet.service';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
// include your new component dependencies

@NgModule({
  declarations: [
    TimesheetListComponent,
    // declare the new components that you're using
  ],
  imports: [
    CommonModule,
    MdListModule,
    MdInputModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdProgressSpinnerModule,
    TimeUnitsModule,
    RouterModule,
  ],
  providers: [
    TimesheetService,
  ],
})
export class TimesheetModule {}
