import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { SptSessionModule } from './session.module';
import { SptCryptoService } from '../crypto/crypto.service';
//import { User } from '../../models/user.model';

@Injectable({
  providedIn: SptSessionModule
})
export class SptSession {
  private key = 'token';
  private helper = new JwtHelperService();

  get token() {
    const encrypted = sessionStorage.getItem(this.key);
    return encrypted;//this.crypto.decrypt(encrypted);
  }

  set token(value: string) {
    //const encrypted = this.crypto.encrypt(value);
    sessionStorage.setItem(this.key, value);
  }

 /* get user(): User {
    const jwt = this.helper.decodeToken(this.token);
    return new User(jwt);
  }*/

  get isAuthenticated() {
    if (this.token) {
      return true;//!this.helper.isTokenExpired(this.token);
    }

    return false;
  }

  constructor(private crypto: SptCryptoService) {
  }

  create(token: string) {
    this.token = token;
  }

  destroy() {
    sessionStorage.removeItem(this.key);
  }


}
