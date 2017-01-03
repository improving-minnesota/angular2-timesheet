import {Component, OnInit} from '@angular/core';

import {LocalStorage, AUTH_TOKEN_NAME} from './auth/localStorage';
import {LoginService} from './shared/login.service';

@Component({
  selector: 'app-root',
  styleUrls: ['././app.component.scss'],
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
