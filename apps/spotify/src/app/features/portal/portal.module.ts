import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { PortalCommonsModule } from './commons/commons.module';
import { HomeView } from './views/home/home.view';
import { HelpView } from './views/help/help.view';
import { PremiumComponent } from './views/premium/premium.component';
import { SptAuthHttpModule } from '@spotify/commons/http/auth';
import { SptHeaderModule, SptBannerModule } from '@spotify/commons/components';
import { LoginView } from './views/login/login.view';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PortalComponent,
    HomeView,
    HelpView,
    PremiumComponent,
    LoginView

  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    PortalCommonsModule,
    MatDialogModule,
  ]
})
export class PortalModule { }
