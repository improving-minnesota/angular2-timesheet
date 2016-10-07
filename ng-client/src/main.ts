import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

  platformBrowserDynamic().bootstrapModule(AppModule);


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
