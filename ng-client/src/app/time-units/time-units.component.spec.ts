/* tslint:disable:no-unused-variable */

import { By } from '@angular/platform-browser';

import { Component} from '@angular/core';

import {
  beforeEach, addProviders,
  ddescribe, describe, xdescribe,
  expect, it, xit,
  async, inject,
  TestComponentBuilder, fakeAsync
} from '@angular/core/testing';

import { Router } from '@angular/router';

import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';

import { TimeUnitsComponent } from './time-units.component';
import {TimeUnit} from '../shared/TimeUnit';

describe('Component: TimeUnits', () => {
  let builder: TestComponentBuilder;
  let component: TimeUnitsComponent;
  let route;
  let routerProvider;

  beforeEach(() => {
    route = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    routerProvider = {
      provide: Router, useFactory: () => {
        return route;
      }
    };
  });

  beforeEach(() => addProviders([
    routerProvider,
    MD_CARD_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    TimeUnitsComponent
  ]));

  let deps = [TestComponentBuilder, TimeUnitsComponent];
  beforeEach(inject(deps, fakeAsync((tcb: TestComponentBuilder, _component: TimeUnitsComponent) => {
    builder = tcb;
    component = _component;
  })));

  it('should list all provided time units', (done) => {
    return builder.createAsync(TestAppComponent).then(fixture => {
      fixture.detectChanges();

      let timeUnitElements = fixture.debugElement.query(By.css('.timeunits-item'));

      expect(timeUnitElements.children.length).toBe(1);

      let timeUnitElement = timeUnitElements.children[0];
      expect(timeUnitElement.query(By.css('.timeunits-item-hours')).nativeElement.innerHTML).toEqual('8 Hours: Project');
      expect(timeUnitElement.query(By.css('.timeunits-item-date')).nativeElement.innerHTML).toEqual('Aug 8, 2016');

      done();
    });
  });

  it('should route user to timesheet entry page when clicking log button', (done) => {
    return builder.createAsync(TestAppComponent).then(fixture => {
      let logTimeBtn = fixture.debugElement.query(By.css('.timeunits-log'));

      fixture.detectChanges();

      logTimeBtn.nativeElement.click();

      expect(route.navigateByUrl).toHaveBeenCalledTimes(1);
      expect(route.navigateByUrl).toHaveBeenCalledWith(`/home/timesheets/1/entry`);

      done();
    });
  });
});

@Component({
  selector: 'test-app',
  template: `
    <app-time-units [timeUnits]="timeUnits" [timesheetId]="timesheetId"></app-time-units>
  `,
  directives: [TimeUnitsComponent]
})
class TestAppComponent {
  timeUnits: TimeUnit[] = [
    new TimeUnit({
      hoursWorked: 8,
      dateWorked: new Date(1470634493186), // Mon Aug 08 2016 00:34:53 GMT-0500 (CDT)
      project: 'Project'
    })
  ];
  timesheetId: string = '1';
}
