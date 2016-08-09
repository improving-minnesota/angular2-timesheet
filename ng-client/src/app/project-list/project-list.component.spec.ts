import { By } from '@angular/platform-browser';

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
  let mdIconRegistry;
  let mdIconRegistryProvider;
  let projectService;
  let projectServiceProvider;
  let router;
  let routerProvider;
  let builder;

  beforeEach(() => {
    mdIconRegistry = {
      getDefaultFontSetClass: jasmine.createSpy('getDefaultFontSetClass')
    };
    mdIconRegistryProvider = {
      provide: MdIconRegistry,
      useFactory: () => mdIconRegistry
    };

    projectService = {
      getProjects: jasmine.createSpy('getProjects')
    };
    projectServiceProvider = {
      provide: ProjectService,
      useFactory: () => projectService
    };

    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };
    routerProvider = {
      provide: Router,
      useFactory: () => router
    };
  });

  let deps = [TestComponentBuilder];
  beforeEach(inject(deps, fakeAsync((tcb: TestComponentBuilder) => {
      builder = tcb.overrideProviders(ProjectListComponent, [
          mdIconRegistryProvider,
          projectServiceProvider,
          routerProvider
      ]);
  })));

  it('should list all provided projects', (done) => {
    let project = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });

    projectService.getProjects.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([project]);
      });
    });

    return builder
      .createAsync(ProjectListComponent)
      .then((fixture: ComponentFixture<ProjectListComponent>) => {
        fixture.detectChanges();

        let listItems = fixture.debugElement.queryAll(By.css('md-list-item'));

        expect(listItems.length).toBe(2);
        expect(listItems[1].query(By.css('h3')).nativeElement.innerHTML).toBe('Project');
        expect(listItems[1].query(By.css('p')).nativeElement.innerHTML).toBe('description');

        done();
      });
  });

  it('should respond to user click and navigate to proejct creation', (done) => {
    let project = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });

    projectService.getProjects.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([project]);
      });
    });

    return builder
      .createAsync(ProjectListComponent)
      .then((fixture: ComponentFixture<ProjectListComponent>) => {
        fixture.detectChanges();

        let addBtn = fixture.debugElement.query(By.css('button'));

        addBtn.nativeElement.click();

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/projects/new');

        done();
      });
  });
});
