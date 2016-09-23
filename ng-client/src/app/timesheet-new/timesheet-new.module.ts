import { NgModule } from '@angular/core';
import { ReactiveFormsModule }   from '@angular/forms';

import {MdCardModule, MdButtonModule, MdInputModule} from '@angular/material';

import {TimesheetService} from '../shared'
import {IdentityService} from '../auth'
import {TimesheetNewComponent} from './timesheet-new.component'

@NgModule({
  declarations: [
    TimesheetNewComponent
  ],
  imports: [
    MdButtonModule, MdCardModule, MdInputModule, ReactiveFormsModule
  ],
  providers: [TimesheetService,IdentityService],
  bootstrap: [TimesheetNewComponent]
})
export class TimesheetNewModule { }
