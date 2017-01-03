import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import {LoginCommand, User, IdentityService} from '../auth';
import {LoginService} from '../shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private command: LoginCommand;
  private error: boolean;

  constructor(private router: Router, private loginService: LoginService, private identityService: IdentityService) {}

  ngOnInit() {
    this.command = new LoginCommand();
    this.error = false;
    this.identityService.identityDispatch.subscribe((user: User) => {
      if (user.authenticated === false) {
        this.error = true;
      } else {
        this.router.navigateByUrl('/home/projects');
      }
    });
  }

  login() {
    this.error = false;
    this.loginService.login(this.command).subscribe();
  }

}
