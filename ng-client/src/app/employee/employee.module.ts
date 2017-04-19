import { NgModule } from '@angular/core';

import {
  MdListModule,
  MdIconModule,
  MdInputModule,
  MdOptionModule,
  MdButtonModule,
  MdCardModule,
} from '@angular/material';

import { EmployeeNewComponent } from './employee-new';
import { EmployeeListComponent, EmployeeDirective } from './employee-list';
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
  ],
  exports: [],
  providers: [
    EmployeeService
  ],
})
export class EmployeeModule { }
