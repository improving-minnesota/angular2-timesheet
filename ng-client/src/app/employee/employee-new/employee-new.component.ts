import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

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
    console.log('saving', this.employee);
    this.employeeService.save(this.employee).subscribe(() => this.router.navigateByUrl('/home/employees'));
  }
}
