import { IdentityService } from './identity.service';
import { LocalStorage } from './localStorage';
import { ResponseHandler } from './responseHandler.service';

export * from './identity.service';
export * from './localStorage';
export * from './responseHandler.service';
export * from './user';
export * from './LoginCommand';
export * from './extHttp.service';
export * from './login.service';

export const APP_AUTH_PROVIDERS = [
  IdentityService, LocalStorage, ResponseHandler
];

export * from './core.module';
