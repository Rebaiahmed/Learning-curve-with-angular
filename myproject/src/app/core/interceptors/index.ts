import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorInterceptor } from './error.interceptor';
import { HttpsInterceptor } from './https.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { AuthInterceptor } from './auth.interceptor';
import { FakeInterceptor } from './fake.interceptor';
import { ConverterInterceptor } from './converter.interceptor';
import { CacheInterceptor } from './cache.interceptor';

export const httpInterceptorsProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
  },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FakeInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ConverterInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
];
