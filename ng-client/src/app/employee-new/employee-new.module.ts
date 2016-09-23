import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { MdButtonModule, MdInputModule, MdCheckboxModule, MdCardModule } from '@angular/material';

import {EmployeeNewComponent} from './employee-new.component'
import { EmployeeService } from '../shared';

@NgModule({
  declarations: [
    EmployeeNewComponent
  ],
  imports: [
    MdInputModule,
    MdCheckboxModule,
    MdButtonModule,
    MdCardModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [EmployeeNewComponent]
})
export class EmployeeNewModule { }
