import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

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
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    RouterModule,
    TimeUnitsModule,
    TimeUnitsModule,
  ],
  providers: [
    IdentityService,
    TimesheetService,
    TimeUnitService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class TimesheetModule {}
