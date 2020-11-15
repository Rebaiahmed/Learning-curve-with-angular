import { SkipSelf } from '@angular/core';
import { NgModule, Optional } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptorsProviders } from './interceptors';
import { authGuardServices } from './guards';
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [httpInterceptorsProviders, authGuardServices],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
