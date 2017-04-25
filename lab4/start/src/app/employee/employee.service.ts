import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './Employee';
import { ExtHttp } from '../core/extHttp.service';

@Injectable()
export class EmployeeService {

  constructor(private http: ExtHttp) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get('/users')
      .map((response) => response.json() as Employee[]);

  }

  // implement method to post/sava an Employee
}
