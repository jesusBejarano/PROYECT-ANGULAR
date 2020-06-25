import { Injectable } from '@angular/core';
import { SptAuthHttp } from '@spotify/commons/http/auth';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SptLoadingComponent } from '@spotify/commons/components';
import { finalize } from 'rxjs/operators';

import { SptSession } from '@spotify/commons/services';


@Injectable()
export class LoginPresenter {

   credentials: any='grant_type= "client_credentials"&client_id="4170cfea3cc2475297e42abea2d09792"&client_secret="16c0be6667bc48768f2fa614aa33cf0f"';

  constructor(
    private session: SptSession,
    private auth: SptAuthHttp,
    private dialog: MatDialog,
    private router: Router) { }



  signIn() {
    const loading = this.dialog.open(SptLoadingComponent, { disableClose: true });

    this.auth.signIn()
    .pipe(finalize(()=>loading.close()))
    .subscribe(
      token => {
        this.session.create( token);
        this.router.navigateByUrl('/private');
      }
    );
  }

/*
  signIn() {
    const loading = this.dialog.open(SptLoadingComponent, { disableClose: true });
    this.auth.signIn(this.credentials)
    .pipe(finalize(() => loading.close()))
    .subscribe(
      res => {
        this.session.create(res.token);
      }
    );
  }*/


}
