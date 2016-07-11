/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('Component: EmployeeList', () => {
  it('should create an instance', () => {
    let component = new EmployeeListComponent();
    expect(component).toBeTruthy();
  });
});
