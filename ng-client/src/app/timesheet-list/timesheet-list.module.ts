import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import {MdListModule, MdButtonModule, MdIconModule, MdIconRegistry} from '@angular/material';

import {TimesheetService} from '../shared'
import {IdentityService} from '../auth'
import {TimesheetListComponent} from './timesheet-list.component'

@NgModule({
  declarations: [
    TimesheetListComponent
  ],
  imports: [
    CommonModule, MdListModule, MdButtonModule, MdIconModule
  ],
  providers: [TimesheetService, MdIconRegistry,IdentityService],
  bootstrap: [TimesheetListComponent]
})
export class TimesheetListModule { }
