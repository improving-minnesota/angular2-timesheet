import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IdentityService } from './identity.service';
import { ResponseHandler } from './responseHandler.service';
import { ExtHttp } from './extHttp.service';
import { ExtHttpConfig } from './ExtHttpConfig';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ExtHttp,
    IdentityService,
    ResponseHandler,
    ResponseHandler,
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
