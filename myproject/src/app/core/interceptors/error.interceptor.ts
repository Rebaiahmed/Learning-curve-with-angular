import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('error')) {
      return next.handle(req);
    }
    console.warn('ErrorInterceptor');
    return next.handle(req).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          switch (error.status) {
            case 400:
              console.log('400 Error Server !');
              break;
            case 405:
              console.log('405 Error Server !');
              break;
            case 500:
              console.log('500 Error Server !');
              break;
            case 403:
              console.log('403 Error Server !');
              break;
            default:
              console.log('Unknown  Error Server !');
          }
        }
        return throwError(error);
      })
    );
  }
}
