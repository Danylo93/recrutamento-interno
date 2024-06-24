import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate{
    constructor(
      private usuarioService: AuthService,
      private router: Router) { }
    canActivate(){
      if (this.usuarioService.logado) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
}