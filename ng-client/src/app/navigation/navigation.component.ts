import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService, LocalStorage, AUTH_TOKEN_NAME } from '../auth';
import { User } from '../auth/user';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  user: User;

  constructor(private identityService: IdentityService, private storage: LocalStorage, private router: Router) {
  }

  ngOnInit() {
    this.user = this.identityService.user;
    this.identityService.identityDispatch.subscribe((user) => {
      this.user = user;
    });
  }

  go(path) {
    this.router.navigateByUrl(path);
  }

  logout() {
    this.identityService.clear();
    this.storage.removeItem(AUTH_TOKEN_NAME);
    this.router.navigateByUrl('/login');
  }
}
