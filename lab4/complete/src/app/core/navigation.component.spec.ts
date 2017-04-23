import { By } from '@angular/platform-browser';

import {
  TestBed, ComponentFixture
} from '@angular/core/testing';

import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IdentityService, LocalStorage, AUTH_TOKEN_NAME } from '../core';

import { User, Name } from '../core/user';

import { NavigationComponent } from './navigation.component';

xdescribe('Component: Navigation', () => {
  let identityService;
  let identityServiceProvider;
  let localStorage;
  let localStorageProvider;
  let router;
  let routerProvider;
  let fixture;
  let comp;

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

 beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
        // provideRouter([], {enableTracing: true}),
        identityServiceProvider,
        localStorageProvider,
        routerProvider
        ]
      });
      fixture = TestBed.createComponent(NavigationComponent);
      comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    fixture.detectChanges();

    const spans = fixture.debugElement.queryAll(By.css('span'));
    expect(spans[4].nativeElement.innerHTML).toEqual('John Doe');
  });

  it('should navigate user to projects', () => {
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[0].nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/projects');
  });

  it('should navigate user to employees', () => {
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[1].nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/employees');
  });

  it('should navigate user to timesheets', () => {
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[2].nativeElement.click();

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/timesheets');
  });

  it('should logout user', () => {
    fixture.detectChanges();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    buttons[3].nativeElement.click();

    expect(identityService.clear).toHaveBeenCalledTimes(1);

    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
    expect(localStorage.removeItem).toHaveBeenCalledWith(AUTH_TOKEN_NAME);

    expect(router.navigateByUrl).toHaveBeenCalledTimes(1);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
  });
});
