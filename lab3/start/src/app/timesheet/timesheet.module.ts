/**
 * TODO: Add routing for the newly added components.
 *
 * 1. Import new dependencies.
 * 2. Add new components to declarations so that they are available for use.
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
} from '@angular/material';

import { TimeUnitsModule } from '../time-units/time-units.module';
import { IdentityService } from '../core';

import { TimesheetService } from './timesheet.service';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
// TODO #1

@NgModule({
  declarations: [
    TimesheetListComponent,
    // TODO #2
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
