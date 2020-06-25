import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { SptPermissionGuardModule } from './permission.module';
import { SptSession } from '../../services/session/session.service';

@Injectable({
  providedIn: SptPermissionGuardModule
})
export class SptAuthenticatedGuard implements CanActivate {

  constructor(
    private session: SptSession,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if (!this.session.isAuthenticated) {
      // para rutas con parametros
      // this.router.createUrlTree([]); // similar a .navigate([])

      // para rutas sin parametros
      console.log("guardian");
      return this.router.parseUrl('/portal/login'); // similar a .navigateByUrl('')
    }

    return this.session.isAuthenticated;
  }
}
