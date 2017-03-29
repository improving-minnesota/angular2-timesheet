import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Employee} from '../Employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'at-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['././employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  condition: boolean;

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
    this.condition = false;
  }

  add() {
    this.router.navigateByUrl('/home/employees/new');
  }

}
