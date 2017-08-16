# Template Driven Forms

## Lab Goal

Create a new view (new employee), which adds the ability to save an employee to the database. Additionally, import this view into a feature module, and learn more about template driven forms along the way.

## Examples

### Form

```html
<form (ngSubmit)="submitForm()" #formName="ngForm">
  <input [(ngModel)]="data.firstName" #firstName="ngModel" required>
  <p class="alert" [hidden]="firstName.valid || firstName.pristine">
    First name is a required field
  </p>
</form>
```

## Files

- `src/app/employee/employee.service.ts`
- `src/app/employee/employee.module.ts`
- `src/app/employee/employee-new/employee-new.component.ts`
- `src/app/employee/employee-new/employee-new.component.html`
- `src/app/app-routing.module.ts`
