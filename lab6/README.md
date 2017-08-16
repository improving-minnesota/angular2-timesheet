# Pipes

## Goal

Create a custom pipe that takes a timesheet, and outputs the timesheets status as pending, active, or complete.

## Imports

```typescript
import { Pipe, PipeTransform } from '@angular/core';
```

## Examples

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'peopleYears'})
export class PeopleYearsPipe implements PipeTransform {
  transform(age: number): number {
    return age * 7;
  }
}
```

## Files

- `src/app/timesheet/timesheet-list/timesheet-status.pipe.ts`
- `src/app/timesheet/timesheet-list/timesheet-list.component.html`
- `src/app/timesheet/timesheet.module.ts`
