import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './Employee';
import { ExtHttp } from '../core/extHttp.service';

/*
 * TODO: Implement a save method that POSTs and creates a user
 */
@Injectable()
export class EmployeeService {

  constructor(private http: ExtHttp) { }

  getEmployees(): Observable<Employee[]> {
    return Observable.create((observer) => {
      this.http.get('/users').subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  // TODO 1: implement save method here
}
