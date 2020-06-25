import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { SptAuthHttpModule } from './auth.module';
import { environment } from 'apps/spotify/src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SignInCredentials } from '@spotify/commons/interfaces/sign-in-credentials.interface';

@Injectable({providedIn: SptAuthHttpModule})
export class SptAuthHttp {
  constructor(private http:HttpClient) { }

  signIn() {
    return of('BQBjFhqsMSsLx2TsouYoR1a0gkrlBvnbdwxrNDy4tAJeYcFzP0tDGALTDGChYfbujuM9rBmlmwDfD1W_ZyE');
  }

  /*
   headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });*/

/*
  signIn(body: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${environment.api}/auth/sign-in`,body,{headers:this.headers});
  }*/
}
