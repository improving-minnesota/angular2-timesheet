import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router
} from '@angular/router';

import { IdentityService } from './identity.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private identityService: IdentityService, private router: Router) { }

  canActivate() {
    const isAuthenticated = this.identityService.user.authenticated;

    if (isAuthenticated) {
      return true;
    } else {
      // The original URL that the user intends to access is not stored by this approach.
      this.router.navigate(['/login']);
      return false;
    }
  }
}
