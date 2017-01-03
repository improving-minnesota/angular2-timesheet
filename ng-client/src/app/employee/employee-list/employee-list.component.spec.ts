/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';

import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

import {
  async, inject,
  fakeAsync,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('Component: EmployeeList', () => {
  let builder;
  let employeeService;
  let employeeServiceProvider;
  let router;
  let routerProvider;
  let fixture;
  let comp;

  beforeEach(() => {
    employeeService = {
      getEmployees: jasmine.createSpy('getEmployees')
    };

    employeeServiceProvider = {
      provide: EmployeeService,
      useFactory: () => employeeService
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    routerProvider = {
      provide: Router,
      useFactory: () => router
    };
  });

  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          employeeServiceProvider,
          routerProvider
        ]
      });
      fixture = TestBed.createComponent(EmployeeListComponent);
      comp = fixture.componentInstance;
  });

  it('should create an initialize component by looking up employees', () => {
    employeeService.getEmployees.and.callFake(() => {
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

    let employeeListItems = fixture.debugElement.query(By.css('.employee-list-item'));
    expect(employeeListItems.children.length).toBe(1);

    let timeUnitElement = employeeListItems.children[0];
    expect(timeUnitElement.query(By.css('.employee-list-item-name')).nativeElement.innerHTML).toEqual('John Doe');
    expect(timeUnitElement.query(By.css('.employee-list-item-email')).nativeElement.innerHTML).toEqual('johndoe@email.com');

    expect(employeeService.getEmployees).toHaveBeenCalledTimes(1);
  });

  it('should navigate to add employee view', () => {
    employeeService.getEmployees.and.callFake(() => {
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

    let addEmployeeBtn = fixture.debugElement.query(By.css('.add-employee'));
    addEmployeeBtn.nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home/employees/new');
  });
});
