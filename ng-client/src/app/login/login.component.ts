import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router'

import {FORM_DIRECTIVES} from '@angular/forms';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input/input';
import {MdButton} from '@angular2-material/button/button';
import {MdCard} from '@angular2-material/card/card';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MdCard,
    MdButton,
    MdToolbar,
    FORM_DIRECTIVES,
    MD_INPUT_DIRECTIVES
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {}

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl('/home/timesheets');
    return false;
  }

}
