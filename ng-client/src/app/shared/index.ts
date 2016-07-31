export * from './extHttp.service';
export * from './project.service';
export * from './timesheet.service';
export * from './login.service';
export * from './Project';
export * from './employee.service';
export * from './Employee';

import {ExtHttp} from './extHttp.service';
import {ProjectService} from './project.service';
import {EmployeeService} from './employee.service';
import {TimesheetService} from './timesheet.service';
import {LoginService} from './login.service';

export const APP_PROVIDERS = [
  ExtHttp, ProjectService, TimesheetService, LoginService, EmployeeService
];

