import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';

const API_URL = environment.URL_LOCAL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(){
    
    return 
  }
}
