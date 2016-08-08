/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';

import {Router} from '@angular/router';

import {Observable} from 'rxjs/Observable';

import { Employee, EmployeeService } from '../shared';

import { MdIconRegistry } from '@angular2-material/icon/icon';

import {
  beforeEach, addProviders,
  describe, ddescribe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder, fakeAsync,
  ComponentFixture
} from '@angular/core/testing';

import { EmployeeListComponent } from './employee-list.component';

describe('Component: EmployeeList', () => {
  let builder;
  let employeeService;
  let employeeServiceProvider;
  let router;
  let routerProvider;
  let mdIconRegistry;
  let mdIconRegistryProvider;

  beforeEach(() => {
    mdIconRegistry = {
      getDefaultFontSetClass: jasmine.createSpy('getDefaultFontSetClass')
    };
    mdIconRegistryProvider = {
      provide: MdIconRegistry, useFactory: () => {
        return mdIconRegistry;
      }
    };

    employeeService = {
      getEmployees: jasmine.createSpy('getEmployees')
    };

    employeeServiceProvider = {
      provide: EmployeeService, useFactory: () => {
        return employeeService;
      }
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    routerProvider = {
      provide: Router, useFactory: () => {
        return router;
      }
    };
  });

  let deps = [TestComponentBuilder];
  beforeEach(inject(deps, fakeAsync((tcb: TestComponentBuilder) => {
    builder = tcb
      .overrideProviders(EmployeeListComponent, [
        mdIconRegistryProvider,
        employeeServiceProvider,
        routerProvider
      ]);
  })));

  it('should create an initialize component by looking up employees', (done) => {
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

    return builder
      .createAsync(EmployeeListComponent)
      .then((fixture: ComponentFixture<EmployeeListComponent>) => {
        fixture.detectChanges();

        let employeeListItems = fixture.debugElement.query(By.css('.employee-list-item'));
        expect(employeeListItems.children.length).toBe(1);

        let timeUnitElement = employeeListItems.children[0];
        expect(timeUnitElement.query(By.css('.employee-list-item-name')).nativeElement.innerHTML).toEqual('John Doe');
        expect(timeUnitElement.query(By.css('.employee-list-item-email')).nativeElement.innerHTML).toEqual('johndoe@email.com');

        expect(employeeService.getEmployees).toHaveBeenCalledTimes(1);

        done();
      });
  });

  it('should navigate to add employee view', (done) => {
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

    return builder
      .createAsync(EmployeeListComponent)
      .then((fixture: ComponentFixture<EmployeeListComponent>) => {
        fixture.detectChanges();

        let addEmployeeBtn = fixture.debugElement.query(By.css('.add-employee'));
        addEmployeeBtn.nativeElement.click();

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/employees/new');

        done();
      });
  });
});
