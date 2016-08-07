import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import {
  AUTH_TOKEN_NAME,
  IdentityService,
  LocalStorage,
  LoginCommand,
  Name,
  User
} from '../auth';

import { ExtHttp } from './extHttp.service';

import {JwtHelper} from 'angular2-jwt';

@Injectable()
export class LoginService {

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: ExtHttp, private identityService: IdentityService, private storage: LocalStorage) {
  }

  login(command: LoginCommand): Observable<User> {

    return Observable.create((observer) => {
      const body = {
        username: command.username,
        password: command.password
      };

      this.http.post('/auth/login', body).subscribe((response) => {
        const token = response.json();
        observer.next(this.loadUser(token));
      });
    });
  }

  public loadUser(token: string): User {
    const userToken = this.jwtHelper.decodeToken(token);

    const name = new Name(userToken.firstName, userToken.lastName);
    const user = new User({name: name, authenticated: true, token: token, id: userToken._id});

    this.storage.setItem(AUTH_TOKEN_NAME, token);
    this.identityService.update(user);
    return user;
  }
}
