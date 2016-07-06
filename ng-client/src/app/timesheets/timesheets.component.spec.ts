/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TimesheetsComponent } from './timesheets.component';

describe('Component: Timesheets', () => {
  it('should create an instance', () => {
    let component = new TimesheetsComponent();
    expect(component).toBeTruthy();
  });
});
