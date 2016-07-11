import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ExtHttp} from './ExtHttp.service';

@Injectable()
export class ProjectService {

  constructor(private http:ExtHttp) {}

  getProjects():Observable<any> {
    return Observable.create((observer) => {
      this.http.get('/projects').subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

}
