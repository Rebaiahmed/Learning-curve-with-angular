import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable()
export class FakeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('/api/fake')) {
      return next.handle(req);
    }
    console.warn('Fake Interceptor');
    const data = { firstName: 'test', lastName: 'tets' };
    return of(new HttpResponse({ status: 200, body: data }));
  }
}
