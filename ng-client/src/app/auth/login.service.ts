import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";

import {LoginCommand, IdentityService, User, Name, LocalStorage, AUTH_TOKEN_NAME} from './index';
import {ExtHttp} from '../shared';

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

      this.http.post('/auth/login', JSON.stringify(body)).subscribe((response) => {
        const data = response.json();

        const name = new Name(data.user.firstName, data.user.lastName);
        const user = new User(name,
          data.authenticated,
          data.user._id);

        this.storage.setItem(AUTH_TOKEN_NAME, user).subscribe();
        this.identityService.update(user);

        observer.next(user);
      });
    });
  }

}
