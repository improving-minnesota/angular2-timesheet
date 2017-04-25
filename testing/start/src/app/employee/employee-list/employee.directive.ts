import {Directive, Input, ElementRef} from '@angular/core';
import {Employee} from '../Employee';

@Directive({selector: '[atEmployee]'})
export class EmployeeDirective {

  constructor(private el: ElementRef) {
  }

  @Input() set atEmployee(employee: Employee) {
    const name = `<span class="ts-strong employee-name">${employee.firstName} ${employee.lastName}</span>`;

    const admin = employee.admin ? '<span class="ts-subtext employee-title">(admin)</span>' : '';

    this.el.nativeElement.innerHTML = `${name} ${admin}`;
  }
}
