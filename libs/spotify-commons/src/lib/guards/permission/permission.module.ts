import { NgModule } from '@angular/core';
import { SptSessionModule } from '../../services/session/session.module';

@NgModule({
  imports: [
    SptSessionModule
  ]
})
export class SptPermissionGuardModule { }
