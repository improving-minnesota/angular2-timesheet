import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExtHttp } from './extHttp.service';
import { Project } from './Project';

@Injectable()
export class ProjectService {

  constructor(private http: ExtHttp) {}

  getProjects(): Observable<Project[]> {
    return Observable.create((observer) => {
      this.http.get('/projects').subscribe((response) => {
        observer.next(response.json());
      });
    });
  }

  save(project: Project) {
    return Observable.create((observer) => {
      this.http.post('/projects', project).subscribe((response) => {
        observer.next(response.json());
      });
    });
  }
}
