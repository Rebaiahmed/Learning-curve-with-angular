import { SkipSelf } from '@angular/core';
import { NgModule, Optional } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { httpInterceptorsProviders } from './interceptors';
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [httpInterceptorsProviders],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
