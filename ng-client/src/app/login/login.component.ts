import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

import { NgForm } from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

import {LoginCommand, User, IdentityService} from '../auth';
import {LoginService} from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [],
  directives: [
    MdCard,
    MdButton,
    MdToolbar,
    MD_INPUT_DIRECTIVES,
    NgForm
  ]
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
