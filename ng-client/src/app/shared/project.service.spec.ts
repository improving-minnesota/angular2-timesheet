import {
  addProviders,
  beforeEach,
  inject
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ExtHttp } from './extHttp.service';

import { Project } from './Project';
import { ProjectService } from './project.service';

describe('Project Service', () => {
  let service;
  let extHttp;
  let extHttpProvider;

  beforeEach(() => {
    extHttp = {
      post: jasmine.createSpy('post'),
      get: jasmine.createSpy('get')
    };
    extHttpProvider = {
      provide: ExtHttp,
      useFactory: () => extHttp
    };
  });

  beforeEach(() => addProviders([
    extHttpProvider,
    ProjectService
  ]));

  beforeEach(inject([ProjectService], (_service) => {
    service = _service;
  }));

  it('should make a request to list projects', (done) => {
    let project = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });

    extHttp.get.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => [project]
        });
      });
    });

    service.getProjects()
      .subscribe((projects) => {
        expect(extHttp.get).toHaveBeenCalledTimes(1);
        expect(extHttp.get).toHaveBeenCalledWith('/projects');
        expect(projects.length).toBe(1);

        done();
      });
  });

  it('should make a request to create a new project', (done) => {
    let project = new Project({
      name: 'Project',
      description: 'description'
    });

    let returnProject = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });

    extHttp.post.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next({
          json: () => returnProject
        });
      });
    });

    service.save(project)
      .subscribe((_project) => {
        expect(extHttp.post).toHaveBeenCalledTimes(1);
        expect(extHttp.post).toHaveBeenCalledWith('/projects', project);
        expect(_project._id).toBe('1');

        done();
      });
  });
});
