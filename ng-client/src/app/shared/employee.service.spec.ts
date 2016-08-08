import {
  addProviders,
  inject
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import {ExtHttp} from './extHttp.service';

import { Employee } from './Employee';
import { EmployeeService } from './employee.service';

describe('Employee Service', () => {
  let service;
  let extHttp;
  let extHttpProvider;

  beforeEach(() => {
    extHttp = {
      post: jasmine.createSpy('post'),
      get: jasmine.createSpy('get')
    };
    extHttpProvider = {
      provide: ExtHttp,
      useFactory: () => extHttp
    };
  });

  beforeEach(() => addProviders([
    extHttpProvider,
    EmployeeService
  ]));

  beforeEach(inject([EmployeeService], (_service) => {
    service = _service;
  }));

  it('should make a request to list employees', (done) => {
    let employee = new Employee({
      _id: '1',
      username: 'johndoe',
      email: 'johndo@email.com',
      admin: true,
      firstName: 'John',
      lastName: 'Doe',
      password: ''
    });

    extHttp.get.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => [employee]
        });
      });
    });

    service.getEmployees()
      .subscribe((employees) => {
        expect(extHttp.get).toHaveBeenCalledTimes(1);
        expect(extHttp.get).toHaveBeenCalledWith('/users');
        expect(employees.length).toBe(1);

        done();
      });
  });

  it('should make a request to create a new employee', (done) => {
    let employee = new Employee({
      username: 'johndoe',
      email: 'johndo@email.com',
      admin: true,
      firstName: 'John',
      lastName: 'Doe',
      password: ''
    });

    let returnedEmployee = new Employee({
      _id: '1',
      username: 'johndoe',
      email: 'johndo@email.com',
      admin: true,
      firstName: 'John',
      lastName: 'Doe',
      password: ''
    });

    extHttp.post.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => returnedEmployee
        });
      });
    });

    service.save(employee)
      .subscribe((_employee) => {
        expect(extHttp.post).toHaveBeenCalledTimes(1);
        expect(extHttp.post).toHaveBeenCalledWith('/users', employee);
        expect(_employee._id).toBe('1');

        done();
      });
  });
});
