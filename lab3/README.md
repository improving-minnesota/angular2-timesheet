# Embedded Components

## Lab Goal
Create a new service method to retrieve Timesheet instances. Create a new component to display to display the timesheet
details for a single timesheet instance. Add a new service method to the timeunits service that can retrieve a list of
time sheet entries (timeunits) for a given Timesheet. Create a new component named TimesheetDetailComponent that
receives inputs and displays and renders timesheet details. Create a new component named TimeUnitsComponent that will
render a list of time units for the selected Timesheet instance.

## Imports
```typescript
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
```

## Lab -- Timesheet Detail Page

* Create a timesheet component to hold the timesheet
* Route to this component from the timesheet list page
    * This click handler is wired up for you already
    * Don't forget to create the route!




## Lab 3

- Create a time unit list component to hold the time units (TimeUnit class provided for you)
 - Use ngFor to list each timeunit
 - Show hours worked, project name, and date worked
- Create a timesheet details component to show the details of the timesheet
 - Show the name, description, begin date, and end date
- Fetch the timesheet and time units in the parent component (timesheet)
- Pass these down to the child components


## Lab 3 - Files

- `src/app/timesheet/timesheet.service.ts`
- `src/app/app-routing.module.ts`
- `src/app/timesheet/timesheet-detail/timesheet-detail.component.html`
- `src/app/timesheet/timesheet-detail/timesheet-detail.component.ts`
- `src/app/timesheet/timesheet-list/timesheet-list.component.html`
- `src/app/timesheet/timesheet-list/timesheet-list.component.ts`
- `src/app/timesheet/timesheet.component.ts`
- `src/app/timesheet/timesheet.module.ts`
