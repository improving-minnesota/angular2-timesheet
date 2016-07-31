import { Component, OnInit } from '@angular/core';
import {Employee, EmployeeService} from "../shared";
import {Router} from "@angular/router";
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button/button';
import {MD_ICON_DIRECTIVES, MdIconRegistry} from '@angular2-material/icon/icon';

@Component({
  moduleId: module.id,
  selector: 'app-employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.css'],
  directives: [MD_LIST_DIRECTIVES, MD_ICON_DIRECTIVES, MD_BUTTON_DIRECTIVES],
  providers: [MdIconRegistry]
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService:EmployeeService, private router:Router ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    })
  }

  add() {
    this.router.navigate(['/home/employees/new']);
  }

}
