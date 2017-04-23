import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdOptionModule,
  MdButtonModule,
  MdCardModule,
  MdCheckboxModule,
  MdSelectModule,
} from '@angular/material';

// import new dependencies
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    EmployeeListComponent,
    // declare new components
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule,
    MdListModule,
    RouterModule,
  ],
  exports: [],
  providers: [
    EmployeeService
  ],
})
export class EmployeeModule { }
