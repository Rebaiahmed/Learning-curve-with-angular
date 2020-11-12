import { SkipSelf } from '@angular/core';
import { NgModule, Optional } from '@angular/core';

import {
  CustomInterceptor,
  CachingInterceptor,
  ErrorHandlerInterceptor,
  ApiInterceptor,
} from './interceptors/index';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
