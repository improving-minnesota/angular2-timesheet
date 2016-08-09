import { By }           from '@angular/platform-browser';

import {
  inject,
  TestComponentBuilder, fakeAsync,
  ComponentFixture
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ProjectService } from '../shared';
import { Router } from '@angular/router';
import { Project } from '../shared';

import { MdIconRegistry } from '@angular2-material/icon/icon';

import { ProjectListComponent } from './project-list.component';

describe('Component: ProjectList', () => {
  let projectService;
  let projectServiceProvider;
  let router;
  let routerProvider;
  let builder;

  beforeEach(() => {
    let project = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });
    projectService = {
      getProjects: jasmine.createSpy('getProjects')
      // getProjects: () => {
      //   return Observable.create((obs) => {
      //     obs.next([project]);
      //   });
      // }
    };
    projectServiceProvider = {
      provide: ProjectService,
      useFactory: () => projectService
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
    routerProvider = {
      provider: Router,
      useFactory: () => router
    };
  });

  let deps = [TestComponentBuilder];
  beforeEach(inject(deps, fakeAsync((tcb: TestComponentBuilder) => {
      builder = tcb.overrideProviders(ProjectListComponent, [
          projectServiceProvider,
          routerProvider
      ]);
  })));

  // it('should create an instance', (done) => {
  //   return builder
  //     .createAsync(ProjectListComponent)
  //     .then((fixture: ComponentFixture<ProjectListComponent>) => {
  //       fixture.detectChanges();
  //
  //       // let spans = fixture.debugElement.queryAll(By.css('span'));
  //       // expect(spans[4].nativeElement.innerHTML).toEqual('John Doe');
  //
  //       done();
  //     });
  // });
});
