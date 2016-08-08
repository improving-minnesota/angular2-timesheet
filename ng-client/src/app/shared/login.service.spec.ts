/* tslint:disable:no-unused-variable */

import { provide } from '@angular/core';

import {
  addProviders,
  inject
} from '@angular/core/testing';

import {
  HTTP_PROVIDERS,
  Http,
  RequestOptionsArgs
} from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { LoginService } from './login.service';

import {
  AUTH_TOKEN_NAME,
  IdentityService,
  LocalStorage,
  LoginCommand
} from '../auth';

import { ExtHttp } from './extHttp.service';

class ExtHttpMock {
  post(url: string, body: any, options?: RequestOptionsArgs) {}
}

describe('Login Service', () => {
  let service: LoginService;
  let extHttp: ExtHttpMock;
  let identityService: IdentityService;
  let storage: LocalStorage;
  let jwtToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJqb2huIiwibGFzdE5hbWUiOiJkb2UiLCJfaWQiOiIxIn0.A6gUhsto3HuGg7hD9ydE_rsGE9ulhDgMoHkL8jlLRj8';

  beforeEach(() => addProviders([
    provide(ExtHttp, {useClass: ExtHttpMock}),
    HTTP_PROVIDERS,
    IdentityService,
    LocalStorage,
    LoginService
  ]));

  beforeEach(
      inject([Http, ExtHttp, IdentityService, LocalStorage, LoginService], (_http, _extHttp, _identityService, _storage, _service) => {
    extHttp = _extHttp;
    identityService = _identityService;
    storage = _storage;
    service = _service;
  }));

  it('should successfully authenticate a user', (done) => {
    spyOn(extHttp, 'post')
      .and.callFake(() => {
        return new Observable((obs) => {
          obs.next({
            json: () => {
              return jwtToken;
            }
          });
        });
      });

    spyOn(storage, 'setItem');
    spyOn(identityService, 'update');

    let command = new LoginCommand('user', 'password');

    service.login(command)
      .subscribe((user) => {
        expect(storage.setItem).toHaveBeenCalledWith(AUTH_TOKEN_NAME, jwtToken);
        expect(identityService.update).toHaveBeenCalledWith(jasmine.any(Object));

        expect(user.name.first).toEqual('john');
        expect(user.name.last).toEqual('doe');
        expect(user.token).toEqual(jwtToken);
        expect(user.id).toEqual('1');

        done();
      });

  });
});
