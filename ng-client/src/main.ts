import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import {ComponentRef} from '@angular/core';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {LocalStorage, AUTH_TOKEN_NAME} from './app/auth';

import {APP_AUTH_PROVIDERS} from './app/auth';
import {APP_PROVIDERS} from './app/shared';

import {AUTH_PROVIDERS} from 'angular2-jwt';
import {LoginService} from './app/shared';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  APP_PROVIDERS,
  APP_AUTH_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]).then(
  (appRef: ComponentRef<any>) => {
    // Look for the user:
    let storage: LocalStorage = appRef.injector.get(LocalStorage);
    let loginService: LoginService = appRef.injector.get(LoginService);
    storage.initStorage(window.localStorage);

    const token = storage.getItem(AUTH_TOKEN_NAME);
    if (token) {
      loginService.loadUser(token);
    }
  },
  error => console.log(error)
);

