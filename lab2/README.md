# Advanced Components

## Lab Goal
Create a new service named EmployeeService that communicates with a remote API to list employees. Configure this new service for use in Angular via dependency injection. Create a new EmployeeListComponent that retrieves an instance of EmployeeService by defining it as a dependency. Add a new route to access our employee list. 

## Imports

`import { OnInit, Injectable, NgModule, Component } from '@angular/core';`

`import { Observable } from 'rxjs/Observable';`

`import { ExtHttp } from '../core/extHttp.service';`

## Example
### Project Service
```js
@Injectable()
export class ProjectService {

  constructor(private http: ExtHttp) {}

  getProjects(): Observable<Project[]> {
    return this.http.get('/projects')
      .map(response => response.json() as Project[]);
  }
```

### Project List Component
```js
export class ProjectListComponent implements OnInit {
  projects: Project[];

  constructor(private projectService: ProjectService) {
    this.projects = [];
  }

  ngOnInit() {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
```

## Files
- `src/app/employee/Employee.ts`
- `src/app/employee/employee.service.ts`
- `src/app/employee/employee.module.ts`
- `src/app/employee/employee-list/employee-list.component.ts`
- `src/app/employee/employee-list/employee-list.component.html`
- `src/app/app-routing.module.ts`
- `src/app/app.module.ts`
