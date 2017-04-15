import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.scss']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.employee = new Employee({});
  }

  save() {
    this.employeeService.save(this.employee).subscribe(() => this.router.navigateByUrl('/employees'));
  }
}
