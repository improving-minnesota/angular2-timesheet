import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EmployeeNewComponent } from './employee-new';
import { EmployeeListComponent, EmployeeDirective } from './employee-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    EmployeeDirective,
    EmployeeListComponent,
    EmployeeNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule.forRoot(),
  ],
  exports: [
  ],
  providers: [
    EmployeeService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class EmployeeModule { }
