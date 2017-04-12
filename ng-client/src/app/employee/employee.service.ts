import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Employee } from './Employee';
import { ExtHttp } from '../core/extHttp.service';

@Injectable()
export class EmployeeService {

  constructor(private http: ExtHttp) {}

  getEmployees(): Observable<Employee[]> {
    return Observable.create((observer) => {
      this.http.get('/users').subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  save(employee: Employee) {
    return Observable.create((observer) => {
      this.http.post('/users', employee).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

}
