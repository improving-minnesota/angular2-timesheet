import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService, LocalStorage, AUTH_TOKEN_NAME } from '../core';
import { User } from '../core/user';

@Component({
  selector: 'at-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav')
  sideNav: ViewChild;

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
    (this.sideNav as any).close();
    this.router.navigateByUrl('/login');
  }
}
