import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      /*
        Verifica se o usuario esta logado caso ele acesse a rota de login e
        redireciona ele para a tela inicial
      */

      if(this.userService.isLogged()){
        //se o usuario estiver logado

        // IMPLEMENTAR ROTA

        return false
      }

    
    return true;
  }
  
}
