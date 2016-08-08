import {Component, OnInit} from '@angular/core';
import {Employee, EmployeeService} from '../shared';
import {Router} from '@angular/router';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon/icon';
import {EmployeeDirective} from '../employee-directive/employee.directive';

@Component({
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.scss'],
  directives: [MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MD_BUTTON_DIRECTIVES, EmployeeDirective],
  providers: [MdIconRegistry, EmployeeService]
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
