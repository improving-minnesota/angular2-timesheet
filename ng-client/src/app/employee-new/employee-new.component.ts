import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Employee, EmployeeService } from '../shared';

@Component({
  selector: 'app-employee-new',
  templateUrl: 'employee-new.component.html',
  styleUrls: ['employee-new.component.scss']
})
export class EmployeeNewComponent {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employee = new Employee({});
  }

  save() {
    this.employeeService.save(this.employee).subscribe(() => this.router.navigateByUrl('/home/employees'));
  }
}
