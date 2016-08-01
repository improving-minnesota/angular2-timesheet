import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox/checkbox';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {Employee, EmployeeService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-employee-new',
  templateUrl: 'employee-new.component.html',
  styleUrls: ['employee-new.component.css'],
  directives: [
    MdCard,
    MdButton,
    MdToolbar,
    MD_INPUT_DIRECTIVES,
    MD_CHECKBOX_DIRECTIVES,
    NgForm
  ]
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee;

  constructor(private employeeService: EmployeeService, private router: Router) {
    this.employee = new Employee({});
  }

  ngOnInit() {
  }

  save() {
    this.employeeService.save(this.employee).subscribe(() => this.router.navigate(['/home/employees']));
  }
}
