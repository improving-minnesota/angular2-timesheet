import { By } from '@angular/platform-browser';

import {
  TestBed
} from '@angular/core/testing';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { MaterialModule, MdIconRegistry } from '@angular/material';

import { TimesheetService } from '../timesheet.service';
import { IdentityService, User, Name } from '../../core';

import { Timesheet } from '../Timesheet';
import { TimesheetListComponent } from './timesheet-list.component';

xdescribe('Component: TimesheetList', () => {
  let fixture;
  let comp;
  let timesheetService;
  let timesheetServiceProvider;
  let identityService;
  let identityServiceProvider;
  let router;
  let routerProvider;

  beforeEach(() => {

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

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ TimesheetListComponent ],
      });

      TestBed.configureTestingModule({
        providers: [
          timesheetServiceProvider,
          identityServiceProvider,
          routerProvider,
          MdIconRegistry
        ],
        imports: [
          MaterialModule
        ]
      });
      fixture = TestBed.createComponent(TimesheetListComponent);
      comp = fixture.componentInstance;
  });

  it('should list timesheets and timesheets should respond to clicks', () => {
    const timesheet = new Timesheet({
      _id: '1',
      name: 'Timesheet',
      description: 'description'
    });
    timesheetService.getTimesheets.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([timesheet]);
      });
    });

    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('md-list-item'));

    expect(listItems.length).toBe(2);
    expect(listItems[1].query(By.css('h3')).nativeElement.innerHTML).toBe('Timesheet');
    expect(listItems[1].query(By.css('p')).nativeElement.innerHTML).toBe('description');

    listItems[1].nativeElement.click();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/timesheets/1');
  });

  it('should create an instance', () => {
    const timesheet = new Timesheet({
      name: 'Timesheet',
      description: 'description'
    });
    timesheetService.getTimesheets.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([timesheet]);
      });
    });

    fixture.detectChanges();

    const addBtn = fixture.debugElement.query(By.css('button'));

    addBtn.nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/timesheets/new');
  });
});
