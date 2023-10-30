import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Importa map desde RxJS
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PageProtegidoGuard implements CanActivate {
  constructor(private router: Router, private angularFire: AngularFireAuth) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.angularFire.authState.pipe(
      map((user: any) => {
        if (user) {
          return true; // El usuario está autenticado y puede acceder a la página protegida.
        } else {
          // El usuario no está autenticado, redirige a la página de inicio de sesión.
          this.router.navigate(['/bienvenida']);
          return false;
        }
      })
    );
  }
}
