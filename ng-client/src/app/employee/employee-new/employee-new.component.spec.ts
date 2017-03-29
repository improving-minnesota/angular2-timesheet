/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MdButtonModule } from '@angular/material';

import {
  TestBed
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { MaterialModule } from '@angular/material';

import { EmployeeService } from '../employee.service';

import { EmployeeNewComponent } from './employee-new.component';
import { TimeUnit } from '../../time-units/TimeUnit';

xdescribe('Component: EmployeeNew', () => {
  let employeeService;
  let employeeServiceStub;
  let router;
  let routerStub;
  let fixture;
  let component;

  function filterToVisibleElements(elements) {
    return elements.filter((el) => {
      return !el.nativeElement.hidden;
    });
  }

  beforeEach(() => {
    employeeServiceStub = {
      save: jasmine.createSpy('save')
    };

    routerStub = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    TestBed.configureTestingModule({
      declarations: [ EmployeeNewComponent ],
      imports: [
        CommonModule,
        FormsModule,
        MaterialModule
      ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceStub },
        { provide: Router, userValue: routerStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    });

    fixture = TestBed.createComponent(EmployeeNewComponent);
    component = fixture.componentInstance;

    employeeService = TestBed.get(EmployeeService);
    router = TestBed.get(Router);
  });

  it('should not attempt to save due to validation errors', () => {
    fixture.detectChanges();
    // TODO
  });

  it('should attempt to save new employee', () => {
    fixture.detectChanges();
    // TODO
  });
});
