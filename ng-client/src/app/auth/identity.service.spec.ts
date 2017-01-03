import { inject } from '@angular/core/testing';

import { IdentityService } from './identity.service';
import { Name, User } from './user';

fdescribe('Identity Service', () => {
  let service: IdentityService;

  beforeEach(inject([IdentityService], (_service) => {
    service = _service;
  }));

  it('should create a blank user', () => {
    let user = service.user;

    expect(user.name.first).toEqual('');
    expect(user.name.last).toEqual('');
    expect(user.authenticated).toBe(false);
    expect(user.token).toBe('');
    expect(user.id).toBe('');
  });

  it('should set the user', () => {
    let userName = new Name('john', 'doe');
    let updatedUser = new User({
      name: userName,
      authenticated: true,
      token: 'token',
      id: 'id'
    });

    service.user = updatedUser;
    let user = service.user;

    expect(user.name).toEqual(userName);
    expect(user.authenticated).toBe(true);
    expect(user.token).toBe('token');
    expect(user.id).toBe('id');
    expect(user.authenticated).toBe(true);
  });

  it('should return an observable for identity dispatch and receive updates', (done) => {
    let userName = new Name('john', 'doe');
    let updatedUser = new User({
      name: userName,
      authenticated: true,
      token: 'token',
      id: 'id'
    });

    let observable = service.identityDispatch;

    observable.subscribe((user) => {
      expect(user.name).toEqual(userName);
      expect(user.authenticated).toBe(true);
      expect(user.token).toBe('token');
      expect(user.id).toBe('id');

      done();
    });

    service.update(updatedUser);
  });

  it('should clear the user and send a notification to subscribers', (done) => {
    let userName = new Name('john', 'doe');
    let updatedUser = new User({
      name: userName,
      authenticated: true,
      token: 'token',
      id: 'id'
    });

    service.user = updatedUser;

    let observable = service.identityDispatch;

    observable
      .subscribe((user) => {
        expect(user.name.first).toEqual('');
        expect(user.name.last).toEqual('');
        expect(user.authenticated).toBe(false);
        expect(user.token).toBe('');
        expect(user.id).toBe('');

        done();
      });

    service.clear();
  });
});
