import { NgModule } from '@angular/core';
import { EmployeeNewComponent } from './employee-new';
import { EmployeeListComponent, EmployeeDirective } from './employee-list';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '@angular/material';
import {EmployeeService} from './employee.service'
//import {EmployeeDirective} from './employee-list/employee.directive';

@NgModule({
  declarations: [
    EmployeeListComponent, EmployeeNewComponent, EmployeeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
  ],
  providers: [EmployeeService],
  bootstrap: []
})
export class EmployeeModule { }