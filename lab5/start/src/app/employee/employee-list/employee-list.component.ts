import {
  Component,
  OnInit
} from '@angular/core';

import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) {
    this.employees = [];
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }
}
