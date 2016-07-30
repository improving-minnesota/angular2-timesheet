export * from './identity.service';
export * from './localStorage';
export * from './responseHandler.service';
export * from './user';
export * from './loginCommand'

import {IdentityService} from './identity.service';
import {LocalStorage} from './localStorage';
import {ResponseHandler} from './responseHandler.service';

export const APP_AUTH_PROVIDERS = [
  IdentityService, LocalStorage, ResponseHandler
];
