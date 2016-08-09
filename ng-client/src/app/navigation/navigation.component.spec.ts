import { By } from '@angular/platform-browser';

import {
  inject,
  TestComponentBuilder, fakeAsync,
  ComponentFixture
} from '@angular/core/testing';

import { Router, provideRouter } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IdentityService, LocalStorage, AUTH_TOKEN_NAME } from '../auth';

import { User, Name } from '../auth/user';

import { NavigationComponent } from './navigation.component';

describe('Component: Navigation', () => {
  let builder;
  let identityService;
  let identityServiceProvider;
  let localStorage;
  let localStorageProvider;
  let router;
  let routerProvider;

  beforeEach(() => {
    identityService = {
      identityDispatch: Observable.create((obs) => {
        obs.next(new User({
          name: new Name('John', 'Doe'),
          token: 'token',
          authenticated: true,
          id: '1'
        }));
      }),
      clear: jasmine.createSpy('clear')
    };
    identityServiceProvider = {
      provide: IdentityService,
      useFactory: () => identityService
    };

    localStorage = {
      removeItem: jasmine.createSpy('removeItem')
    };
    localStorageProvider = {
      provide: LocalStorage,
      useFactory: () => localStorage
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
    builder = tcb
      .overrideProviders(NavigationComponent, [
        provideRouter([], {enableTracing: true}),
        identityServiceProvider,
        localStorageProvider,
        routerProvider
      ]);
  })));

  it('should create an instance', (done) => {
    return builder
      .createAsync(NavigationComponent)
      .then((fixture: ComponentFixture<NavigationComponent>) => {
        fixture.detectChanges();

        let spans = fixture.debugElement.queryAll(By.css('span'));
        expect(spans[4].nativeElement.innerHTML).toEqual('John Doe');

        done();
      });
  });

  it('should navigate user to projects', (done) => {
    return builder
      .createAsync(NavigationComponent)
      .then((fixture: ComponentFixture<NavigationComponent>) => {
        fixture.detectChanges();

        let buttons = fixture.debugElement.queryAll(By.css('button'));
        buttons[0].nativeElement.click();

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/projects');

        done();
      });
  });

  it('should navigate user to employees', (done) => {
    return builder
      .createAsync(NavigationComponent)
      .then((fixture: ComponentFixture<NavigationComponent>) => {
        fixture.detectChanges();

        let buttons = fixture.debugElement.queryAll(By.css('button'));
        buttons[1].nativeElement.click();

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/employees');

        done();
      });
  });

  it('should navigate user to timesheets', (done) => {
    return builder
      .createAsync(NavigationComponent)
      .then((fixture: ComponentFixture<NavigationComponent>) => {
        fixture.detectChanges();

        let buttons = fixture.debugElement.queryAll(By.css('button'));
        buttons[2].nativeElement.click();

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/home/timesheets');

        done();
      });
  });

  it('should logout user', (done) => {
    return builder
      .createAsync(NavigationComponent)
      .then((fixture: ComponentFixture<NavigationComponent>) => {
        fixture.detectChanges();

        let buttons = fixture.debugElement.queryAll(By.css('button'));
        buttons[3].nativeElement.click();

        expect(identityService.clear).toHaveBeenCalledTimes(1);

        expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
        expect(localStorage.removeItem).toHaveBeenCalledWith(AUTH_TOKEN_NAME);

        expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
        expect(router.navigateByUrl).toHaveBeenCalledWith('/login');

        done();
      });
  });
});
