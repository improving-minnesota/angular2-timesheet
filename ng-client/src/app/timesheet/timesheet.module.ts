import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router'

import { MdProgressCircleModule } from '@angular/material';

import {TimesheetDetailModule} from '../timesheet-detail'
import {TimeUnitsModule} from '../time-units'

import {TimesheetService} from '../shared'
import {IdentityService} from '../auth'
import {TimesheetComponent} from './timesheet.component'

@NgModule({
  declarations: [
    TimesheetComponent
  ],
  imports: [
    CommonModule, MdProgressCircleModule, TimesheetDetailModule, TimeUnitsModule, RouterModule
  ],
  providers: [TimesheetService, IdentityService],
  bootstrap: [TimesheetComponent]
})
export class TimesheetModule { }
