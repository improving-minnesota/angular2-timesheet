import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";

import {LoginCommand, IdentityService, User, Name, LocalStorage, AUTH_TOKEN_NAME} from './index';
import {ExtHttp} from '../shared';

import jwtDecode from 'jwt-decode';

@Injectable()
export class LoginService {

  constructor(private http:ExtHttp, private identityService:IdentityService, private storage:LocalStorage) {
  }

  login(command:LoginCommand):Observable<User> {

    return Observable.create((observer) => {
      const body = {
        username: command.username,
        password: command.password
      };

      this.http.post('/auth/login', body).subscribe((response) => {
        const token = response.json();
        const userToken = jwtDecode(token);

        console.log(JSON.stringify(userToken));

        const name = new Name(userToken.firstName, userToken.lastName);
        const user = new User(name, true, userToken._id);

        this.storage.setItem(AUTH_TOKEN_NAME, JSON.stringify(user)).subscribe();
        this.identityService.update(user);

        observer.next(user);
      });
    });
  }

}
