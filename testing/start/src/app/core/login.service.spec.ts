/* tslint:disable:max-line-length */
import {
  inject
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';

import { IdentityService } from './identity.service';
import {
  AUTH_TOKEN_NAME,
  LocalStorage
} from './localStorage';
import { LoginCommand } from './LoginCommand';

import { ExtHttp } from './extHttp.service';

describe('Login Service', () => {
  let service;
  let extHttp;
  let identityService;
  let localStorage;
  const jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJkb2UiLCJfaWQiOiIxIn0.A6gUhsto3HuGg7hD9ydE_rsGE9ulhDgMoHkL8jlLRj8';

  beforeEach(() => {
    extHttp = {
      post: jasmine.createSpy('post')
    };

    identityService = {
      update: jasmine.createSpy('update')
    };

    localStorage = {
      setItem: jasmine.createSpy('setItem')
    };
  });

  beforeEach(() => {
    service = new LoginService(extHttp, identityService, localStorage);
  });

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

    const command = new LoginCommand('user', 'password');

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
