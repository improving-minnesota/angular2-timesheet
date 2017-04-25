## Instructions

*Lab 4 - Instructions*

- Add a save method (`this.http.post`) to `src/app/employee/employee.service`
- Add the template driven form object (and component definition) to `src/app/employee/employee-new/employee-new.component.ts`
 - Note make sure to import `import { FormsModule } from '@angular/forms';` in order to get access to `ngModel` directive
- Add the form element to the new employee template (`src/app/employee/employee-new/employee-new.component.html`) following the newly defined template model
- Add a route to employee/new in `src/app/app-routing.module.ts`

## Files

- `src/app/app-routing.module.ts`
- `src/app/employee/employee-new/employee-new.component.html`
- `src/app/employee/employee-new/employee-new.component.ts`
- `src/app/employee/employee.module.ts`
- `src/app/employee/employee.service.ts`
