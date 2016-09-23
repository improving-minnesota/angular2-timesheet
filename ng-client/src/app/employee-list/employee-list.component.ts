import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../shared';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.scss']
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
