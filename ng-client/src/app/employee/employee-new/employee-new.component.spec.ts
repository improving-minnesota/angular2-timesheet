/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';

import { Component} from '@angular/core';

import {
  async, inject,
  TestBed, fakeAsync,
  ComponentFixture
} from '@angular/core/testing';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { EmployeeService } from '../employee.service';

import { EmployeeNewComponent } from './employee-new.component';
import { TimeUnit } from '../../time-units/TimeUnit';

describe('Component: EmployeeNew', () => {
  let employeeService;
  let employeeServiceProvider;
  let route;
  let routerProvider;
  let comp;
  let fixture;

  beforeEach(() => {
    employeeService = {
      save: jasmine.createSpy('save')
    };

    employeeServiceProvider = {
      provide: EmployeeService,
      useFactory: () => employeeService
    };

    route = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    routerProvider = {
      provide: Router,
        useFactory: () => route
    };
  });

  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
        employeeServiceProvider,
        routerProvider
        ]
      });
      fixture = TestBed.createComponent(EmployeeNewComponent);
      comp = fixture.componentInstance;
  });

  // it('should not attempt to save due to validation errors', (done) => {
  //   return builder
  //     .createAsync(EmployeeNewComponent)
  //     .then((fixture: ComponentFixture<EmployeeNewComponent>) => {
  //
  //     fixture.detectChanges();
  //
  //     let instance = fixture.componentInstance;
  //
  //     done();
  //   });
  // });

  it('should attempt to save new employee', () => {

  });
});
