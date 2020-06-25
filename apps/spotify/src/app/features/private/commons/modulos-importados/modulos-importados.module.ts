import { NgModule } from '@angular/core';


import { SptAuthHttpModule } from '@spotify/commons/http/auth';
import { SptHeaderModule, SptBannerModule } from '@spotify/commons/components';
import { SptErrorsInterceptorModule, SptTokenInterceptorModule } from '@spotify/commons/interceptors';
import { SptServiceHttpModule } from '@spotify/commons/http/spotify';
import { SptSessionModule } from '@spotify/commons/services';
import { SptPermissionGuardModule } from '@spotify/commons/guards';



@NgModule({
  declarations: [],
  exports: [
    SptAuthHttpModule,
    SptHeaderModule,
    SptBannerModule,
    SptErrorsInterceptorModule,
    SptServiceHttpModule,
    SptSessionModule,
    SptTokenInterceptorModule
  ],
  imports: [
    SptAuthHttpModule,
    SptHeaderModule,
    SptBannerModule,
    SptErrorsInterceptorModule,
    SptServiceHttpModule,
    SptSessionModule,
    SptTokenInterceptorModule
  ],
})
export class PrivateModulosImportadosModule { }
