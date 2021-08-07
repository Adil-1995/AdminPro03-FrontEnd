import { UsuarioService } from './../services/usuario.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService,
                private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      if (this.usuarioService.role === 'ADMIN_ROLE') {
        return true;
      } else {
        this.router.navigateByUrl('/dashboard');
        return false;
      }


  }

}
