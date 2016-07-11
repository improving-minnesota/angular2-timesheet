import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {MdButton} from '@angular2-material/button/button';
import {MdToolbar} from '@angular2-material/toolbar/toolbar';
import {IdentityService, LocalStorage} from '../auth';

@Component({
  moduleId: module.id,
  directives: [ROUTER_DIRECTIVES, MdButton, MdToolbar],
  providers: [LocalStorage, IdentityService],
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private identityService:IdentityService, private storage: LocalStorage, private router:Router) {}

  ngOnInit() {
  }

  go(path){
    this.router.navigateByUrl(path);
  }

  logout() {
    this.identityService.clear();
    this.storage.removeItem('authToken');
    this.router.navigateByUrl('/login');
  }
}
