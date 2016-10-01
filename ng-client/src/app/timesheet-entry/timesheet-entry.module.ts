import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MdInputModule, MdCardModule, MdButtonModule} from '@angular/material';

import {TimesheetEntryComponent} from './timesheet-entry.component'
import {ProjectService, TimeUnitService} from '../shared';

@NgModule({
  declarations: [
    TimesheetEntryComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, MdInputModule, MdButtonModule, MdCardModule
  ],
  providers: [ProjectService, TimeUnitService],
  bootstrap: [TimesheetEntryComponent]
})
export class TimesheetEntryModule { }
