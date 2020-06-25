import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SptSession } from '../../services/session/session.service';
import { environment } from 'apps/spotify/src/environments/environment';

@Injectable()
export class SptTokenInterceptor implements HttpInterceptor {

  constructor(private session: SptSession) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request);


      const headers = {
        Authorization: `Bearer ${this.session.token}`
      };

      const url = `${environment.api}${request.url}`;


      const req = request.clone({
        setHeaders: headers,
        url
      });
      console.log("interceptor token");
      return next.handle(req);

  }
}
