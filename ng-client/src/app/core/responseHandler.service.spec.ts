import { inject } from '@angular/core/testing';

import { ResponseHandler } from './responseHandler.service';

import { Router } from '@angular/router';
import { IdentityService } from './identity.service';
import {
  AUTH_TOKEN_NAME,
  LocalStorage
} from './localStorage';

describe('ResponseHandler Service', () => {
  let service: ResponseHandler;
  let router;
  let identityService;
  let localStorage;

  beforeEach(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    identityService = {
      clear: jasmine.createSpy('clear')
    };

    localStorage = {
      removeItem: jasmine.createSpy('removeItem')
    };
  });

  beforeEach(() => {
    service = new ResponseHandler(router, identityService, localStorage);
  });

  it('should handle 401 by logging out', () => {
    service.handle401();

    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledWith(AUTH_TOKEN_NAME);

    expect(identityService.clear).toHaveBeenCalledTimes(1);

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });

  it('should handle 403 and logout user', () => {
    service.handle403();

    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledWith(AUTH_TOKEN_NAME);

    expect(identityService.clear).toHaveBeenCalledTimes(1);

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
