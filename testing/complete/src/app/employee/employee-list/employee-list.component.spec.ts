import { ComponentFixture, TestBed } from '@angular/core/testing';

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

import { EmployeeListComponent } from './employee-list.component';
import { EmployeeDirective } from './employee.directive';
import { EmployeeService } from '../employee.service';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let employeeServiceStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListComponent, EmployeeDirective ],
      imports: [
        MdListModule,
        MdIconModule,
        MdInputModule,
        MdOptionModule,
        MdButtonModule,
        MdCardModule,
        MdCheckboxModule,
        MdSelectModule
      ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceStub }
      ]
    });

    fixture = TestBed.createComponent(EmployeeListComponent);

    component = fixture.componentInstance;
  });

  it('contains an empty array of components', () => {
    expect(component.employees).toEqual([]);
  });
});
