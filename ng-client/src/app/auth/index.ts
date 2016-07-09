export * from './extHttp.service';
export * from './identity.service';
export * from './localStorage';
export * from './responseHandler.service';
export * from './user';
export * from './loginCommand'
export * from './login.service'

import {ExtHttp} from './extHttp.service';
import {IdentityService} from './identity.service';
import {LocalStorage} from './localStorage';
import {ResponseHandler} from './responseHandler.service';

export const AUTH_PROVIDERS = [
  ExtHttp, IdentityService, LocalStorage, ResponseHandler
];
