import { inject } from '@angular/core/testing';

import { IdentityService } from './identity.service';
import {
  Name,
  User
} from './user';

describe('Identity Service', () => {
  let service: IdentityService;

  beforeEach(() => {
    service = new IdentityService();
  });

  it('should create a blank user', () => {
    const user = service.user;

    expect(user.name.first).toEqual('');
    expect(user.name.last).toEqual('');
    expect(user.authenticated).toBe(false);
    expect(user.token).toBe('');
    expect(user.id).toBe('');
  });

  it('should set the user', () => {
    const userName = new Name('john', 'doe');
    const updatedUser = new User({
      name: userName,
      authenticated: true,
      token: 'token',
      id: 'id'
    });

    service.user = updatedUser;
    const user = service.user;

    expect(user.name).toEqual(userName);
    expect(user.authenticated).toBe(true);
    expect(user.token).toBe('token');
    expect(user.id).toBe('id');
    expect(user.authenticated).toBe(true);
  });

  it('should return an observable for identity dispatch and receive updates', (done) => {
    const userName = new Name('john', 'doe');
    const updatedUser = new User({
      name: userName,
      authenticated: true,
      token: 'token',
      id: 'id'
    });

    const observable = service.identityDispatch;

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
    const userName = new Name('john', 'doe');
    const updatedUser = new User({
      name: userName,
      authenticated: true,
      token: 'token',
      id: 'id'
    });

    service.user = updatedUser;

    const observable = service.identityDispatch;

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
