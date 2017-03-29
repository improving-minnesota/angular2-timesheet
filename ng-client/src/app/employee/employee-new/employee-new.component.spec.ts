/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import {
  TestBed
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { EmployeeService } from '../employee.service';

import { EmployeeNewComponent } from './employee-new.component';
import { TimeUnit } from '../../time-units/TimeUnit';

fdescribe('Component: EmployeeNew', () => {
  let employeeService;
  let employeeServiceStub;
  let router;
  let routerStub;
  let fixture;
  let component;

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
        MaterialModule.forRoot(),
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

    let saveEmployeeBtn = fixture.debugElement.query(By.css('.save-new-employee-btn'));
    saveEmployeeBtn.triggerEventHandler('click', null);

    // detect errors
    console.log(fixture.debugElement.query(By.css('.alert')));
  });

  it('should attempt to save new employee', () => {
    fixture.detectChanges();

    let saveEmployeeBtn = fixture.debugElement.query(By.css('.save-new-employee-btn'));
    saveEmployeeBtn.triggerEventHandler('click', null);

    // detect no errors
  });
});
