import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EmployeeDirective } from './employee.directive';

describe('Directive: Employee', () => {
  let fixture;
  let router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDirective ]
    })

    fixture = TestBed.createComponent(EmployeeDirective);
    router = TestBed.get(Router);
  })

  it('should render employee as admin', () => {
    fixture.detectChanges();

    console.log(fixture.debugElement);
  });

  it('should not render an employee as admin', () => {
    fixture.detectChanges();

    console.log(fixture.debugElement);
  });
});
