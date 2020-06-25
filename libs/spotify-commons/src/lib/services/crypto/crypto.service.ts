import { Injectable } from '@angular/core';
import { SptCrytoServiceModule } from './crypto.module';
import crypto from 'crypto-js';

@Injectable({
  providedIn: SptCrytoServiceModule
})
export class SptCryptoService {
  private key = 'B418oe1BaAMHYH2KklfReoPnNC0d4iis';

  encrypt(toEncrypt: string) {
    return crypto.AES.encrypt(toEncrypt, this.key).toString();
  }

  decrypt(toDecrypt: string) {
    return toDecrypt ? crypto.AES.decrypt(toDecrypt, this.key).toString(crypto.enc.Utf8) : '';
  }

}
