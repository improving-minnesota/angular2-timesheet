import { addProviders, inject } from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ExtHttp } from './extHttp.service';
import { TimeUnit } from './TimeUnit';
import { TimeUnitService } from './timeunit.service';
import { Name, User } from '../auth';

describe('TimeUnitService Service', () => {
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
    TimeUnitService
  ]));

  beforeEach(inject([TimeUnitService], (_service) => {
    service = _service;
  }));

  it('should make http call to svae timeunit provided user and timeunit', (done) => {
    let user = new User({
      name: new Name('John', 'Doe'),
      token: 'token',
      authenticated: true,
      id: '1'
    });

    let timeUnit = new TimeUnit({
      timesheet_id: '2'
    });
    let returnedTimeUnit = new TimeUnit({});

    extHttp.post.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => returnedTimeUnit
        });
      });
    });

    service.create(user, timeUnit)
      .subscribe((_timeUnit) => {
        expect(extHttp.post).toHaveBeenCalledTimes(1);
        expect(extHttp.post).toHaveBeenCalledWith('/users/1/timesheets/2/timeunits', timeUnit);
        expect(_timeUnit).toEqual(returnedTimeUnit);

        done();
      });
  });
});
