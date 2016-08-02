/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TimeUnitsComponent } from './time-units.component';

describe('Component: TimeUnits', () => {
  it('should create an instance', () => {
    let component = new TimeUnitsComponent();
    expect(component).toBeTruthy();
  });
});
