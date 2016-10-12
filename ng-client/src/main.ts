import './polyfills.ts';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {enableProdMode, NgModuleRef} from '@angular/core';
import {environment} from './environments/environment';
import {AppModule} from './app/';
import {LocalStorage, AUTH_TOKEN_NAME} from './app/auth/localStorage';
import {LoginService} from './app/shared/login.service';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(
  (moduleRef: NgModuleRef<AppModule>) => {
  //  console.log('checking local storage for user')
  //  // Look for the user:
  //  let storage: LocalStorage = moduleRef.injector.get(LocalStorage);
  //  let loginService: LoginService = moduleRef.injector.get(LoginService);
  //  storage.initStorage(window.localStorage);
  //
  //  const token = storage.getItem(AUTH_TOKEN_NAME);
  //  if (token) {
  //    loginService.loadUser(token);
  //  }
  }
);


//TODO: Need to figure out how to wire up if the dependency injection hack still works

//bootstrap(AppComponent, [
//  APP_ROUTER_PROVIDERS,
//  HTTP_PROVIDERS,
//  AUTH_PROVIDERS,
//  APP_PROVIDERS,
//  APP_AUTH_PROVIDERS
//]).then(
//  (appRef: ComponentRef<any>) => {
//    // Look for the user:
//    let storage: LocalStorage = appRef.injector.get(LocalStorage);
//    let loginService: LoginService = appRef.injector.get(LoginService);
//    storage.initStorage(window.localStorage);
//
//    const token = storage.getItem(AUTH_TOKEN_NAME);
//    if (token) {
//      loginService.loadUser(token);
//    }
//  },
//  error => console.log(error)
//);
