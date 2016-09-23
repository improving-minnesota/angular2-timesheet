import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MdListModule, MdCardModule, MdButtonModule } from '@angular/material';

import {TimesheetService} from '../shared'
import {IdentityService} from '../auth'
import {TimesheetDetailComponent} from './timesheet-detail.component'
import {TimesheetCompletePipe} from './timesheet-complete.pipe'

@NgModule({
  declarations: [
    TimesheetDetailComponent, TimesheetCompletePipe
  ],
  exports: [
    TimesheetDetailComponent, TimesheetCompletePipe
  ],
  imports: [
    CommonModule, MdListModule, MdCardModule, MdButtonModule
  ],
  providers: [TimesheetService, IdentityService],
  bootstrap: [TimesheetDetailComponent]
})
export class TimesheetDetailModule { }
