import {Directive, Input, ElementRef} from '@angular/core';
import {Employee} from '../Employee';

@Directive({selector: '[employee]'})
export class EmployeeDirective {

  constructor(private el: ElementRef) {
  }

  @Input() set employee(employee: Employee) {
    const name = `<span class="ts-strong">${employee.firstName} ${employee.lastName}</span>`;

    const admin = employee.admin ? '<span class="ts-subtext">(admin)</span>' : '';

    this.el.nativeElement.innerHTML = `${name} ${admin}`;

  }
}
