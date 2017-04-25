import { IdentityService } from './identity.service';
import {
  Name,
  User
} from './user';

describe('IdentityService', () => {
  let service: IdentityService;
  let user: User;

  beforeEach(() => {
    service = new IdentityService();
    user = new User({
      name: new Name('Dustin', 'Schau'),
      authenticated: false,
      token: 'token',
      id: 'id'
    });
  });

  it('should set to an empty user by default', () => {
    const emptyUser = new User({
      name: new Name('', ''),
      authenticated: false,
      token: '',
      id: ''
    });

    const user = service.user;

    Object.keys(user)
      .forEach(key => {
        expect(user[key]).toEqual(emptyUser[key]);
      });
  });

  it('should set the user', () => {
    service.user = user;

    const serviceUser = service.user;

    [
      'name',
      'authenticated',
      'token',
      'id'
    ]
      .forEach(field => {
        expect(serviceUser[field]).toBeDefined();
        expect(serviceUser[field]).toEqual(user[field]);
      });
  });

  it('should update the user', (done) => {
    const observable = service.identityDispatch;

    observable.subscribe(updatedUser => {
      expect(user).toEqual(updatedUser);
      done();
    });

    service.update(user);
  });
  
  it('should clear the user', (done) => {
    const observable = service.identityDispatch;
    const emptyUser = {
      name: new Name('', ''),
      authenticated: false,
      token: '',
      id: ''
    };

    observable.subscribe(updatedUser => {
      Object.keys(updatedUser)
        .forEach(key => {
          expect(updatedUser[key]).toEqual(emptyUser[key]);
        });
      done();
    });

    service.clear();
  });
});
