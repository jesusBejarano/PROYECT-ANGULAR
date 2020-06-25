import { NgModule } from '@angular/core';
import {  privateComponentsModule } from './components/components.module';
import { PrivateModulosImportadosModule } from './modulos-importados/modulos-importados.module';

@NgModule({
    exports: [
      PrivateModulosImportadosModule,
        privateComponentsModule

    ]
})
export class PrivateCommonsModule {}
