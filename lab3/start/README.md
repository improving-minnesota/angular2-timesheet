## Instructions

Pre-reqs: a running server

Goal: Add a timesheet detail page, that shows the detail view for a particular timesheet

```
cd lab3/start
yarn || npm install
yarn start || npm start
```

Instructions:

(Note: make sure to import services/components appropriately in the respective modules (e.g. `timesheet.module` and `app.module`)

- Add a method to the timesheet service to get a particular timesheet `src/app/timesheet/timesheet.service.ts`
- Create a `TimesheetComponent` in `src/app/timesheet/timesheet.component`
 - This component will be the "container" that displays the Timesheet
 - Note: inject `ActivatedRoute` from `@angular/router`, and inject into controller
 - Note: you can get the id via `this.route.params.subscribe(params => // do something)`
 - Note: inject `TimesheetService` so you can call the `getTimesheet()` method
 - Note: inject `TimeUnitService` (`src/app/time-units/timeuit.service.ts`), so you can get timeunits and pass to components
- Create a `TimesheetDetailComponent` in `src/app/timesheet/timesheet-detail/timesheet-detail.component.ts`
 - This component will contain an `Input` of timesheet, passed via `timesheet.component`
- Add a route for the new timesheets detail component `timesheets/:id` in `src/app/app-routing.module.ts`
- Route to timesheets/:id on `(click)` (i.e. create controller function to call on timesheet click) in `src/app/timesheet/timesheet-list` (controller and template)
 - `Hint`: `this.router.navigateByUrl` is helpful
- Import the `TimesheetModule` into `src/app/app.module.ts`

## Files

- `src/app/app-routing.module.ts`
- `src/app/timesheet/timesheet-detail/timesheet-detail.component.html`
- `src/app/timesheet/timesheet-detail/timesheet-detail.component.ts`
- `src/app/timesheet/timesheet-list/timesheet-list.component.html`
- `src/app/timesheet/timesheet-list/timesheet-list.component.ts`
- `src/app/timesheet/timesheet.component.ts`
- `src/app/timesheet/timesheet.module.ts`
- `src/app/timesheet/timesheet.service.ts`
