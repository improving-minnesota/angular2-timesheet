/* tslint:disable:no-unused-variable */

import { addProviders, inject } from '@angular/core/testing';

import { TimesheetService } from './timesheet.service';

import { Observable } from 'rxjs/Observable';
import { ExtHttp } from './extHttp.service';
import { User, Name } from '../auth';
import { Timesheet } from './Timesheet';
import { TimeUnit } from './TimeUnit';

describe('TimesheetService Service', () => {
  let service;
  let extHttp;
  let extHttpProvider;

  beforeEach(() => {
    extHttp = {
      get: jasmine.createSpy('get'),
      post: jasmine.createSpy('post')
    };

    extHttpProvider = {
      provide: ExtHttp,
      useFactory: () => extHttp
    };
  });

  beforeEach(() => addProviders([
    extHttpProvider,
    TimesheetService
  ]));

  beforeEach(inject([TimesheetService], (_service) => {
    service = _service;
  }));

  it('should make http call to retrieve all timesheets for provided user', (done) => {
    let user = new User({
      name: new Name('John', 'Doe'),
      token: 'token',
      id: '1',
      authenticated: true
    });
    let timesheet = new Timesheet({});

    extHttp.get.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => [timesheet]
        });
      });
    });

    service.getTimesheets(user)
      .subscribe((_timesheets) => {
        expect(extHttp.get).toHaveBeenCalledTimes(1);
        expect(extHttp.get).toHaveBeenCalledWith('/users/1/timesheets');

        expect(_timesheets.length).toBe(1);
        expect(_timesheets[0]).toEqual(timesheet);

        done();
      });
  });

  it('should make http call to retrieve timesheet for provided user and id', (done) => {
    let user = new User({
      name: new Name('John', 'Doe'),
      token: 'token',
      id: '1',
      authenticated: true
    });
    let timesheetId = '1';
    let timesheet = new Timesheet({});

    extHttp.get.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => timesheet
        });
      });
    });

    service.getTimesheet(user, timesheetId)
      .subscribe((_timesheet) => {
        expect(extHttp.get).toHaveBeenCalledTimes(1);
        expect(extHttp.get).toHaveBeenCalledWith('/users/1/timesheets/1');

        expect(_timesheet).toEqual(timesheet);

        done();
      });
  });

  it('should make http call to retrieve timeunits for provided user and timesheet id', (done) => {
    let user = new User({
      name: new Name('John', 'Doe'),
      token: 'token',
      id: '1',
      authenticated: true
    });
    let timesheetId = '1';
    let timeUnit = new TimeUnit({});

    extHttp.get.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => [timeUnit]
        });
      });
    });

    service.getTimeUnits(user, timesheetId)
      .subscribe((_timeUnit) => {
        expect(extHttp.get).toHaveBeenCalledTimes(1);
        expect(extHttp.get).toHaveBeenCalledWith('/users/1/timesheets/1/timeunits');

        expect(_timeUnit.length).toBe(1);
        expect(_timeUnit[0]).toEqual(timeUnit);

        done();
      });
  });

  it('should make http call to save a timesheet provided user and timesheet', (done) => {
    let user = new User({
      name: new Name('John', 'Doe'),
      token: 'token',
      id: '1',
      authenticated: true
    });
    let timesheet = new Timesheet({});
    let savedTimesheet = new Timesheet({_id: '1'});

    extHttp.post.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => savedTimesheet
        });
      });
    });

    service.save(user, timesheet)
      .subscribe((_timesheet) => {
        expect(extHttp.post).toHaveBeenCalledTimes(1);
        expect(extHttp.post).toHaveBeenCalledWith('/users/1/timesheets', timesheet);

        expect(_timesheet).toEqual(savedTimesheet);

        done();
      });
  });

});
