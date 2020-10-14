import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  /* 
    O BehaviorSubject tem que definir um valor padrão que será emitido logo de cara.
    Ele armazena a última emissão até que alguém apareça para consumí-la
  */
  private userSubject = new BehaviorSubject(null);
  private userName: string;

  constructor(
    private tokenService: TokenService
  ) { 
    //pergunta se tem token na aplicação e decodifica e notifica
    this.tokenService.hasToken() && this.decodeAndNotify()
  }

  //recebe o token
  setToken(token: string){
    this.tokenService.setToken(token)

  }

  getUser(){
    //retorna a usersubject como objervable para que possa ser usado o valor
    return this.userSubject.asObservable()
  }

  //decodifca o token
  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user  = jtw_decode(token) 
    this.userSubject.next(user) //coloca o user no subject 
  
  }

  //faz o logout
  logout(){
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  //verfica se ta logado
  isLogged(){
    return this.tokenService.hasToken()
  }

  //pega o nome do usuario
  getUserName(){
    return this.userName;
  }
}
