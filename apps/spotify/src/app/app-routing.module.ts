import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SptAuthenticatedGuard } from '@spotify/commons/guards';


const routes: Routes = [
  {path:'',redirectTo:'portal' ,pathMatch:'full'},
  {
    path: 'portal',
    loadChildren: () => import('./features/portal/portal.module').then(m => m.PortalModule)
  },
  {
    path: 'private',
    canActivate: [SptAuthenticatedGuard],
     loadChildren: () => import('./features/private/private.module').then(m => m.PrivateModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
