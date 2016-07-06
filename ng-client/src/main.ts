import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import {ComponentRef} from '@angular/core';

import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {LocalStorage} from './app/auth/localStorage';
import {IdentityService} from './app/auth/identity.service';

if (environment.production) {
  enableProdMode();
}

import { provideRouter, RouterConfig } from '@angular/router';


bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  LocalStorage,
  IdentityService,
  disableDeprecatedForms(),
  provideForms()
]).then(
  (appRef: ComponentRef<any>) => {
    //Look for the user:
    let identity: IdentityService = appRef.injector.get(IdentityService);
    let storage: LocalStorage = appRef.injector.get(LocalStorage);
    storage.initStorage(window.localStorage);
    storage.getItem("authToken").subscribe((value) => {
      if(value) {
        identity.update(JSON.parse(value));
      }
    })
  },
  error => console.log(error)
);

