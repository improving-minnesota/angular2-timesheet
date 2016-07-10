import {Injectable} from '@angular/core';

import {Observable} from "rxjs/Observable";

import {ExtHttp} from './extHttp.service';
import {LoginCommand} from './loginCommand';
import {IdentityService} from './identity.service';
import {User, Name} from './user';

@Injectable()
export class LoginService {

  constructor(private http:ExtHttp, private identityService:IdentityService) {
  }

  login(command:LoginCommand):Observable<User> {

    let observable = Observable.create((observer) => {
      const body = {
        username: command.username,
        password: command.password
      };

      this.http.post('/auth/login', JSON.stringify(body)).subscribe((response) => {
        const data = response.json();
        console.log(data);

        const name = new Name(data.user.firstName, data.user.lastName);
        const user = new User(name,
          data.authenticated,
          data.user._id);

        this.identityService.update(user);

        observer.next(user);
      });
    });

    return observable;
  }

}
