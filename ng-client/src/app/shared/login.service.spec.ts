/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { LoginService } from './login.service';

describe('Login Service', () => {
  beforeEachProviders(() => [LoginService]);

  it('should ...',
      inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
