import { Pipe, PipeTransform } from '@angular/core';
import {Employee} from '../shared/Employee';

@Pipe({name: 'employee'})
export class EmployeePipe implements PipeTransform {
  transform(employee: Employee, exponent: string): any {
    return `<strong>${employee.username}</strong>`;
  }
}
