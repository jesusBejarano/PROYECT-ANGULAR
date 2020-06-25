import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';

import { HomeView } from './views/home/home.view';
import { HelpView } from './views/help/help.view';
import { PremiumComponent } from './views/premium/premium.component';
import { LoginView } from './views/login/login.view';


const routes: Routes = [{
   path: '',
   component: PortalComponent ,
   children: [
    { path: '', component: HomeView },
    { path: 'help', component: HelpView },
    { path: 'premium', component: PremiumComponent },
    { path: 'login', component: LoginView }
  ]

  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
