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
import { IdentityService } from '../core';

import { TimesheetService } from './timesheet.service';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetListComponent } from './timesheet-list/timesheet-list.component';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeUnitService } from '../time-units/timeunit.service';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetListComponent,
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
