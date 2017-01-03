/* tslint:disable:max-line-length */
import {
  inject
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';

import {
  AUTH_TOKEN_NAME,
  IdentityService,
  LocalStorage,
  LoginCommand
} from '../auth';

import { ExtHttp } from './extHttp.service';

describe('Login Service', () => {
  let service;
  let extHttp;
  let extHttpProvider;
  let identityService;
  let identityServiceProvider;
  let localStorage;
  let localStorageProvider;
  let jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJkb2UiLCJfaWQiOiIxIn0.A6gUhsto3HuGg7hD9ydE_rsGE9ulhDgMoHkL8jlLRj8';

  beforeEach(() => {
    extHttp = {
      post: jasmine.createSpy('post')
    };
    extHttpProvider = {
      provide: ExtHttp,
      useFactory: () => extHttp
    };

    identityService = {
      update: jasmine.createSpy('update')
    };
    identityServiceProvider = {
      provide: IdentityService,
      useFactory: () => identityService
    };

    localStorage = {
      setItem: jasmine.createSpy('setItem')
    };
    localStorageProvider = {
      provide: LocalStorage,
      useFactory: () => localStorage
    };
  });

  beforeEach(inject([LoginService], (_service) => {
    service = _service;
  }));

  it('should successfully authenticate a user', (done) => {
    extHttp.post.and.callFake(() => {
      return new Observable((obs) => {
        obs.next({
          json: () => {
            return jwtToken;
          }
        });
      });
    });

    let command = new LoginCommand('user', 'password');

    service.login(command)
      .subscribe((user) => {
        expect(localStorage.setItem).toHaveBeenCalledWith(AUTH_TOKEN_NAME, jwtToken);
        expect(identityService.update).toHaveBeenCalledWith(jasmine.any(Object));

        expect(user.name.first).toEqual('john');
        expect(user.name.last).toEqual('doe');
        expect(user.token).toEqual(jwtToken);
        expect(user.id).toEqual('1');

        done();
      });

  });
});
