import { NgModule } from '@angular/core';

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

import { EmployeeNewComponent } from './employee-new';
import {
  EmployeeDirective,
  EmployeeListComponent,
} from './employee-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  declarations: [
    EmployeeDirective,
    EmployeeListComponent,
    EmployeeNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmployeeRoutingModule,
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule,
  ],
  exports: [],
  providers: [
    EmployeeService
  ],
})
export class EmployeeModule { }
