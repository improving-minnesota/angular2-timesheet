import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { TimeUnitsModule, TimeUnitService } from '../time-units/';
import { IdentityService } from '../core/';

import { TimesheetService } from './timesheet.service';
import { TimesheetComponent } from './timesheet.component';
import { TimesheetNewComponent } from './timesheet-new';
import { TimesheetListComponent } from './timesheet-list';
import { TimesheetDetailComponent } from './timesheet-detail';
import { TimesheetEntryComponent } from './timesheet-entry';
import { TimesheetCompletePipe } from './timesheet-detail/timesheet-complete.pipe';
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
    MaterialModule.forRoot(),
    ReactiveFormsModule,
    TimeUnitsModule,
    TimeUnitsModule,
    TimesheetRoutingModule,
  ],
  providers: [
    IdentityService,
    TimesheetService,
    TimeUnitService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class TimesheetModule {}
