export * from './extHttp.service';
export * from './project.service';
export * from './timesheet.service';
export * from './login.service';
export * from './Project';
export * from './employee.service';
export * from './Employee';
export * from './Timesheet';
export * from './TimeUnit';
export * from './timeunit.service';

import {ExtHttp} from './extHttp.service';
import {LoginService} from './login.service';

export const APP_PROVIDERS = [
  ExtHttp, LoginService
];
