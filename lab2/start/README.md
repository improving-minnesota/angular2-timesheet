## Instructions

Open up `localhost:4200`, and begin developing (we will detail which files to edit, and general process)

1. Start by creating a service in `src/app/employee/employee.service.ts`
2. Import `EmployeeService` in `src/app/employee/employee.module.ts`
3. Create an employee list component (that injects EmployeeService) in `src/app/employee-list/employee-list.component.ts` (that calls the EmployeeService to get employees)
4. Import `EmployeeListComponent` from `src/app/employee-list/employee.module.ts`
5. Create a template in employee list, `src/app/employee-list/employee-list.component.html`
6. Add a route to `src/app/app-routing.module.ts`
7. Import employee module to the app module `src/app/app.module.ts`

## Files

- `src/app/app-routing.module.ts`
- `src/app/app.module.ts`
- `src/app/employee/Employee.ts`
- `src/app/employee/employee-list/employee-list.component.html`
- `src/app/employee/employee-list/employee-list.component.ts`
- `src/app/employee/employee.module.ts`
- `src/app/employee/employee.service.ts`
