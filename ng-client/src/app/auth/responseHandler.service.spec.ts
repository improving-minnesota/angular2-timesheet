import { inject } from '@angular/core/testing';

import { ResponseHandler } from './responseHandler.service';

import { Router } from '@angular/router';
import { IdentityService } from'./identity.service';
import { LocalStorage, AUTH_TOKEN_NAME, } from'./localStorage';

describe('ResponseHandler Service', () => {
  let service: ResponseHandler;
  let router;
  let routerProvider;
  let identityService;
  let identityServiceProvider;
  let localStorage;
  let localStorageProvider;

  beforeEach(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
    routerProvider = {
      provide: Router,
      useFactory: () => router
    };

    identityService = {
      clear: jasmine.createSpy('clear')
    };
    identityServiceProvider = {
      provide: IdentityService,
      useFactory: () => identityService
    };

    localStorage = {
      removeItem: jasmine.createSpy('removeItem')
    };
    localStorageProvider = {
      provide: LocalStorage,
      useFactory: () => localStorage
    };
  });

  // beforeEach(() => addProviders([
  //   routerProvider,
  //   identityServiceProvider,
  //   localStorageProvider,
  //   ResponseHandler
  // ]));

  beforeEach(inject([ResponseHandler], (_service) => {
    service = _service;
  }));

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
