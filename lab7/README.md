# Attribute Directives

## Goal

Create an `atEmployee` directive. This directive will accept an `@Input` that is an employee object. Based on this employee data, the directive will stamp/output to the innerHTML the employee's name and whether an admin or not.

## Imports

```typescript
import { Directive, Input, ElementRef } from '@angular/core';
```

## Examples

### Update innerHTML based on prop changing

```typescript
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({selector: '[sampleDirective]'})
export class SampleDirective {
  constructor(private el: ElementRef) {}

  @Input() set sampleDirective(condition: truthy) {
    if ( condition ) {
      this.el.nativeElement.innerHTML = `is true`;
    } else {
      this.el.nativeElement.innerHTML = `is false`;
    }
  }
}
```

## Files

- `src/app/employee/employee-list/employee-list.directive.ts`
- `src/app/employee/employee-list/employee-list.component.html`
- `src/app/employee/employee.module.ts`
