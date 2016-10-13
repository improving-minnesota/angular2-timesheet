import { By }           from '@angular/platform-browser';

import {
  inject, TestComponentBuilder, fakeAsync,
  ComponentFixture
} from '@angular/core/testing';

import { MdIconRegistry } from '@angular2-material/icon/icon';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { TimesheetService, Timesheet } from '../shared';
import { IdentityService, User, Name } from '../auth';

import { TimesheetListComponent } from './timesheet-list.component';

describe('Component: TimesheetList', () => {
  let builder;
  let mdIconRegistry;
  let mdIconRegistryProvider;
  let timesheetService;
  let timesheetServiceProvider;
  let identityService;
  let identityServiceProvider;
  let router;
  let routerProvider;

  beforeEach(() => {
    mdIconRegistry = {
      getDefaultFontSetClass: jasmine.createSpy('getDefaultFontSetClass')
    };
    mdIconRegistryProvider = {
      provide: MdIconRegistry,
      useFactory: () => mdIconRegistry
    };

    timesheetService = {
      getTimesheets: jasmine.createSpy('getTimesheets')
    };
    timesheetServiceProvider = {
      provide: TimesheetService,
      useFactory: () => timesheetService
    };

    identityService = {
      user: new User({
        name: new Name('John', 'Doe'),
        token: 'token',
        id: '1',
        authenticated: true
      })
    };
    identityServiceProvider = {
      provide: IdentityService,
      useFactory: () => identityService
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
    routerProvider = {
      provide: Router,
      useFactory: () => router
    };
  });

  let deps = [TestComponentBuilder];
  beforeEach(inject(deps, fakeAsync((tcb: TestComponentBuilder) => {
      builder = tcb.overrideProviders(TimesheetListComponent, [
          mdIconRegistryProvider,
          timesheetServiceProvider,
          identityServiceProvider,
          routerProvider
      ]);
  })));

  it('should list timesheets and timesheets should respond to clicks', (done) => {
    let timesheet = new Timesheet({
      _id: '1',
      name: 'Timesheet',
      description: 'description'
    });
    timesheetService.getTimesheets.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([timesheet]);
      });
    });

    return builder
      .createAsync(TimesheetListComponent)
      .then((fixture: ComponentFixture<TimesheetListComponent>) => {
        fixture.detectChanges();

        let listItems = fixture.debugElement.queryAll(By.css('md-list-item'));

        expect(listItems.length).toBe(2);
        expect(listItems[1].query(By.css('h3')).nativeElement.innerHTML).toBe('Timesheet');
        expect(listItems[1].query(By.css('p')).nativeElement.innerHTML).toBe('description');

        listItems[1].nativeElement.click();
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/timesheets/1');

        done();
      });
  });

  it('should create an instance', (done) => {
    let timesheet = new Timesheet({
      name: 'Timesheet',
      description: 'description'
    });
    timesheetService.getTimesheets.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([timesheet]);
      });
    });

    return builder
      .createAsync(TimesheetListComponent)
      .then((fixture: ComponentFixture<TimesheetListComponent>) => {
        fixture.detectChanges();

        let addBtn = fixture.debugElement.query(By.css('button'));

        addBtn.nativeElement.click();

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/timesheets/new');

        done();
      });
  });
});
