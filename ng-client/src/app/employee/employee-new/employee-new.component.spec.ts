/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';

import { Component} from '@angular/core';

import {
  beforeEach, addProviders,
  ddescribe, describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder, fakeAsync,
  ComponentFixture
} from '@angular/core/testing';

import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { MD_CHECKBOX_DIRECTIVES } from '@angular2-material/checkbox/checkbox';
import { MdButton } from '@angular2-material/button/button';
import { MdCard } from '@angular2-material/card/card';
import { MdToolbar } from '@angular2-material/toolbar/toolbar';

import { EmployeeService } from '../shared';

import { EmployeeNewComponent } from './employee-new.component';
import { TimeUnit } from '../shared/TimeUnit';

describe('Component: EmployeeNew', () => {
  let builder: TestComponentBuilder;
  let component: EmployeeNewComponent;
  let employeeService;
  let employeeServiceProvider;
  let route;
  let routerProvider;

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

  let deps = [TestComponentBuilder];
  beforeEach(inject(deps, fakeAsync((tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideProviders(EmployeeNewComponent, [
        disableDeprecatedForms(),
        provideForms(),
        employeeServiceProvider,
        routerProvider
      ]);
  })));

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
