# Model Driven Forms

## Goal

Create a new component to log time using model driven forms, validation, and services.

The validation for some fields is as simple as ensuring they are required (`Validators.required` is helpful here), while also using a custom validator for numbers and date entry.

## Imports

```typescript
import { ReactiveFormModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // gets you routerLink
```

```typescript
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
```

## Examples

### Model Driven Form

```typescript
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  ...
})
export class ExampleComponent implements OnInit {
  private form: FormGroup;
  constructor(private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
```

### Custom Validator

```typescript
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  ...
})
export class ValidatedComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const validateNonZeroInteger = (control: FormControl) => {
      const { value } = control;
      return !isNaN(value) && value >= 0;
    };
  }
}
```

### Dynamic `[routerLink]`

`<a [routerLink]="['/dogs', id, 'age']">Sup Dog</a>`

Will route to the dynamic path '/dogs/:id/age', using the current controller value of `id` and the static string 'dogs' and 'age'

## Files

- `src/app/app-routing.module.ts`
- `src/app/time-units/time-units.module.ts`
- `src/app/time-units/time-units.component.html`
- `src/app/time-units/time-unit.service.ts`
- `src/app/timesheet/timesheet-entry/timesheet-entry.component.ts`
- `src/app/timesheet/timesheet-entry/timesheet-entry.component.html`
