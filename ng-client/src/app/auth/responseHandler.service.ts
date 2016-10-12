
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityService } from'./identity.service';
import { LocalStorage, AUTH_TOKEN_NAME } from'./localStorage';

@Injectable()
export class ResponseHandler {
  constructor(private router: Router, private identity: IdentityService, private storage: LocalStorage) {}

  private logout(): any {
    this.identity.clear();
    this.storage.removeItem(AUTH_TOKEN_NAME);
    this.router.navigateByUrl('/login');
  }

  public handle401(): any {
    this.logout();
  }

  public handle403(): any {
    this.logout();
  }

  public handle500(): any {
    // todo: do something here
  }

}

export const SERVERHANDLER_SERVICE_BINDINGS = [
  ResponseHandler
];
