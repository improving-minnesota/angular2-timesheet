import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';
import { EmployeeDirective } from './employee.directive';
import { EmployeeListComponent } from './employee-list.component';

describe('Component: EmployeeList', () => {
  let employeeServiceStub;
  let employeeService;
  let routerStub;
  let router;
  let fixture;
  let component;

  beforeEach(() => {
    employeeServiceStub = {
      getEmployees: jasmine.createSpy('getEmployees')
    };

    routerStub = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    TestBed.configureTestingModule({
      imports: [ CoreModule ],
      declarations: [
        EmployeeDirective,
        EmployeeListComponent
      ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceStub },
        { provide: Router, useValue: routerStub }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    });

    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;

    employeeService = TestBed.get(EmployeeService);
    router = TestBed.get(Router);
  });

  it('should create an initialize component by looking up employees', () => {
    employeeServiceStub.getEmployees.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([new Employee({
          _id: '1',
          username: 'johndoe',
          admin: true,
          email: 'johndoe@email.com',
          firstName: 'John',
          lastName: 'Doe',
          password: '',
        })]);
      });
    });

    fixture.detectChanges();

    const employeeListItems = fixture.debugElement.queryAll(By.css('.employee-list-item'));
    expect(employeeListItems.length).toBe(1);

    const timeUnitElement = employeeListItems[0];
    const expectedEmployeeName = `
      <span class="ts-strong employee-name">John Doe</span> <span class="ts-subtext employee-title">(admin)</span>
    `.trim();
    // TODO: This is the ugly result of not appending span elements but rather just text.
    expect(timeUnitElement.query(By.css('.employee-list-item-name')).nativeElement.innerHTML).toEqual(expectedEmployeeName);
    expect(timeUnitElement.query(By.css('.employee-list-item-email')).nativeElement.innerHTML).toEqual('johndoe@email.com');

    expect(employeeService.getEmployees).toHaveBeenCalledTimes(1);
  });
});
