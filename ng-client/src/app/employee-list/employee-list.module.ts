import { NgModule } from '@angular/core';
import { MdButtonModule, MdListModule, MdIconModule, MdIconRegistry } from '@angular/material';
import {CommonModule} from '@angular/common';

import {EmployeeListComponent} from './employee-list.component'
import {EmployeeDirective} from './employee.directive'
import { EmployeeService } from '../shared';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDirective
  ],
  imports: [
    MdButtonModule,
    MdListModule,
    MdButtonModule,
    MdIconModule,
    CommonModule
  ],
  providers: [EmployeeService, MdIconRegistry],
  bootstrap: [EmployeeListComponent]
})
export class EmployeeListModule { }
