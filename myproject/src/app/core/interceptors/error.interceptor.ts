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
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          // console.error(
          //   `Backend returned code ${error.status}, ` +
          //   `body was: ${error.error}`);
          switch (error.status) {
            case 400:
              // code block
              break;
            case 405:
              // code block
              break;
            case 500:
              // code block
              break;

            case 403:
              // code block
              break;
            default:
            // code block
          }
        }
        return throwError(error);
      })
    );
  }
}
