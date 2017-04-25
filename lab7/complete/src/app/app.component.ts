import {
  Component,
  OnInit
} from '@angular/core';

import {
  AUTH_TOKEN_NAME,
  LocalStorage
} from './core/localStorage';
import { LoginService } from './core/login.service';

@Component({
  selector: 'at-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private storage: LocalStorage, private loginService: LoginService) {}

  ngOnInit() {
    this.storage.initStorage(window.localStorage);

    const token = this.storage.getItem(AUTH_TOKEN_NAME);
    if (token) {
      this.loginService.loadUser(token);
    }
  }

}
