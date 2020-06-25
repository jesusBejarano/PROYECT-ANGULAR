import { NgModule } from '@angular/core';
import { SptSessionModule } from '../../services/session/session.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SptTokenInterceptor } from './token.interceptor';

@NgModule({
  imports: [
    SptSessionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SptTokenInterceptor,
      multi: true
    }
  ]
})
export class SptTokenInterceptorModule { }
