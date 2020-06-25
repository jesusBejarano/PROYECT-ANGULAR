import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { statusErrors } from './errors.constants';

@Injectable()
export class SptErrorsInterceptor implements HttpInterceptor {

  constructor(private snackBar: MatSnackBar) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("error");
    console.log(request);
    /*const headers = {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    };
    const url = `${environment.api}${request.url}`;
console.log(url);
    const newRequest = request.clone({
      setHeaders: headers,
      url
    });*/

    return next.handle(request)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        let message: string;
        /*
        if (err.error?.codeError) {
          message = codeErrors.get(err.error.codeError) || '';
        }
        */

        if (err.error?.message) {
          message = err.error.message;
        } else {
          message = statusErrors.get(err.status) || 'Error Interno';
        }

        this.snackBar.open(message, 'cerrar', { duration: 3000, verticalPosition: 'top', horizontalPosition: 'right' });


        return throwError(err);
      })
    );
  }
}
