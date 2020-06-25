import { NgModule } from '@angular/core';

import { SptAuthHttpModule } from '@spotify/commons/http/auth';
import { SptHeaderModule, SptBannerModule } from '@spotify/commons/components';
import { SptSessionModule } from '@spotify/commons/services';



@NgModule({
    declarations: [  ],
    exports: [SptAuthHttpModule,
      SptHeaderModule,
      SptBannerModule,
      SptSessionModule
       ],
    imports: [
      SptAuthHttpModule,
      SptHeaderModule,
      SptBannerModule,
      SptSessionModule
    ],
})
export class ModulosImportadosModule {}
