import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { IdentityService } from './identity.service';
import { LocalStorage } from './localStorage';
import { LoginService } from './login.service';
import { ResponseHandler } from './responseHandler.service';
import { ExtHttp } from './extHttp.service';
import { ExtHttpConfig } from './ExtHttpConfig';
import { AuthGuard } from './auth-guard.service';
import { ProjectService } from '../project/project.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
  ],
  providers: [
    ExtHttp,
    IdentityService,
    LocalStorage,
    LoginService,
    ResponseHandler,
    AuthGuard,
    ProjectService,
  ]
})
export class CoreModule {
  static forRoot(config: ExtHttpConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: ExtHttpConfig, useValue: config },
      ]
    };
  }
}
