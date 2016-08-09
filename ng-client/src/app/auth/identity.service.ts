import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User, Name } from './user';

@Injectable()
export class IdentityService {
  private _user: User;
  private _dispatch: Subject<User>;

  private createBlankUser(): User {
    const userData = {
      name: new Name('', ''),
      authenticated: false,
      token: '',
      id: ''
    };
    return new User(userData);
  }

  constructor() {
    this._user = this.createBlankUser();
    this._dispatch = new Subject<User>();
  }

  public get user(): User {
    return this._user;
  }

  public set user(value) {
    this._user = value;
  }

  public get identityDispatch(): Observable<User>{
    return this._dispatch.asObservable();
  }

  public update(user: User): void {
    this._user = user;
    this._dispatch.next(this._user);
  }

  public clear() {
    this.update(this.createBlankUser());
  }
}
