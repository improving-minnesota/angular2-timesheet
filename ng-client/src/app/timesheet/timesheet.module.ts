import {
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdButtonModule,
  MdCardModule,
  MdProgressSpinnerModule,
  MdSelectModule
} from '@angular/material';

import { TimeUnitsModule } from '../time-units';
import { IdentityService } from '../core';

import { TimesheetService } from './timesheet.service';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetNewComponent } from './timesheet-new';
import { TimesheetListComponent } from './timesheet-list';
import { TimesheetDetailComponent } from './timesheet-detail';
import { TimesheetEntryComponent } from './timesheet-entry';
import { TimesheetCompletePipe } from './timesheet-detail/timesheet-complete.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeUnitService } from '../time-units';
import { TimesheetRoutingModule } from './timesheet-routing.module';

@NgModule({
  declarations: [
    TimesheetCompletePipe,
    TimesheetComponent,
    TimesheetDetailComponent,
    TimesheetEntryComponent,
    TimesheetListComponent,
    TimesheetNewComponent,
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
    TimesheetRoutingModule,
    MdSelectModule
  ],
  providers: [
    TimesheetService,
    TimeUnitService,
  ],
})
export class TimesheetModule {}
