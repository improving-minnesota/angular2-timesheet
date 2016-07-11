import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import {ComponentRef} from '@angular/core';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {LocalStorage, IdentityService, AUTH_TOKEN_NAME} from './app/auth';

import {AUTH_PROVIDERS} from './app/auth';
import {APP_PROVIDERS} from './app/shared';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  APP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms()
]).then(
  (appRef: ComponentRef<any>) => {
    //Look for the user:
    let identity: IdentityService = appRef.injector.get(IdentityService);
    let storage: LocalStorage = appRef.injector.get(LocalStorage);
    storage.initStorage(window.localStorage);

    storage.getItem(AUTH_TOKEN_NAME).subscribe((value) => {
      if(value) {
        identity.update(JSON.parse(value));
      }
    })
  },
  error => console.log(error)
);

