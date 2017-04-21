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

import { EmployeeRootComponent} from './employee-root/employee-root.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { EmployeeDirective } from './employee-list/employee.directive';
import { EmployeeListComponent } from './employee-list/employee-list.component';

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
    MdListModule,
    RouterModule,
  ],
  exports: [],
  providers: [
    EmployeeService
  ],
})
export class EmployeeModule { }
