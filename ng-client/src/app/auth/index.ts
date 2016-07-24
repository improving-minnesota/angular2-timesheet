export * from './identity.service';
export * from './localStorage';
export * from './responseHandler.service';
export * from './user';
export * from './loginCommand'
export * from './login.service'

import {IdentityService} from './identity.service';
import {LocalStorage} from './localStorage';
import {ResponseHandler} from './responseHandler.service';
import {LoginService} from './login.service';

export const APP_AUTH_PROVIDERS = [
  IdentityService, LocalStorage, ResponseHandler, LoginService
];
