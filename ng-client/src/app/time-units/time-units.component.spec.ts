import { By } from '@angular/platform-browser';

import { Component} from '@angular/core';

import {
  TestBed
} from '@angular/core/testing';

import { Router } from '@angular/router';

import { TimeUnitsComponent } from './time-units.component';
import { TimeUnit } from './TimeUnit';

describe('Component: TimeUnits', () => {
  let router;
  let routerProvider;
  let fixture;
  let comp;

  beforeEach(() => {
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
          routerProvider
        ]
      });
      fixture = TestBed.createComponent(TimeUnitsComponent);
      comp = fixture.componentInstance;
  });

  it('should list all provided time units', () => {
    fixture.detectChanges();

    let timeUnitElements = fixture.debugElement.query(By.css('.timeunits-item'));

    expect(timeUnitElements.children.length).toBe(1);

    let timeUnitElement = timeUnitElements.children[0];
    expect(timeUnitElement.query(By.css('.timeunits-item-hours')).nativeElement.innerHTML).toEqual('8 Hours: Project');
    expect(timeUnitElement.query(By.css('.timeunits-item-date')).nativeElement.innerHTML).toEqual('Aug 8, 2016');
  });

  it('should route user to timesheet entry page when clicking log button', () => {
    let logTimeBtn = fixture.debugElement.query(By.css('.timeunits-log'));

    fixture.detectChanges();

    logTimeBtn.nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith(`/home/timesheets/1/entry`);
  });
});

@Component({
  template: `
    <app-time-units [timeUnits]="timeUnits" [timesheetId]="timesheetId"></app-time-units>
  `
})
class TestTimeUnitsComponent {
  timeUnits: TimeUnit[] = [
    new TimeUnit({
      hoursWorked: 8,
      dateWorked: new Date(1470634493186), // Mon Aug 08 2016 00:34:53 GMT-0500 (CDT)
      project: 'Project'
    })
  ];
  timesheetId: string = '1';
}
