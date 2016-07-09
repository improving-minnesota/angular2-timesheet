import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'

import { NgForm } from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

import {LoginCommand} from '../auth/loginCommand';
import {LoginService} from "../auth/login.service";
import {User} from "../auth/user";

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService],
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

  constructor(private router:Router, private loginService:LoginService) {}

  ngOnInit() {
    this.command = new LoginCommand()
  }

  login() {
    this.loginService.login(this.command).subscribe((user:User) => {
      if(user.authenticated) {
        this.router.navigateByUrl('/home/timesheets');
      } else {
        // TODO: Handle authentication error
      }
    });
  }

}
