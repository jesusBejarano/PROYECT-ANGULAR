import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { ModulosImportadosModule } from './modulos-importados/modulos-importados.module';

@NgModule({
    exports: [
        ComponentsModule,
        ModulosImportadosModule


    ]
})
export class PortalCommonsModule {}
