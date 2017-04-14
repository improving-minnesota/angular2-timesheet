import { By } from '@angular/platform-browser';

import {
  TestBed
} from '@angular/core/testing';

import { Observable } from 'rxjs/Observable';

import { ProjectService } from '../project.service';
import { Project } from '../Project';
import { Router } from '@angular/router';

import { ProjectListComponent } from './project-list.component';

xdescribe('Component: ProjectList', () => {
  let projectService;
  let projectServiceProvider;
  let router;
  let routerProvider;
  let fixture;
  let comp;

  beforeEach(() => {
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

  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          projectServiceProvider,
          routerProvider
        ]
      });
      fixture = TestBed.createComponent(ProjectListComponent);
      comp = fixture.componentInstance;
  });

  it('should list all provided projects', () => {
    const project = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });

    projectService.getProjects.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([project]);
      });
    });

    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(By.css('md-list-item'));

    expect(listItems.length).toBe(2);
    expect(listItems[1].query(By.css('h3')).nativeElement.innerHTML).toBe('Project');
    expect(listItems[1].query(By.css('p')).nativeElement.innerHTML).toBe('description');
  });

  it('should respond to user click and navigate to proejct creation', () => {
    const project = new Project({
      _id: '1',
      name: 'Project',
      description: 'description'
    });

    projectService.getProjects.and.callFake(() => {
      return Observable.create((obs) => {
        obs.next([project]);
      });
    });

    fixture.detectChanges();

    const addBtn = fixture.debugElement.query(By.css('button'));

    addBtn.nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/projects/new');
  });
});
