import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {sha256} from 'js-sha256';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }

  public get isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public getToken() {
    return sessionStorage.getItem('token');
  }

  public  setToken(token) {
    sessionStorage.setItem('token', token );
  }

  public disconnect() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentUser');
    this.CurrentUser = null;
  }

  public get CurrentUser() {
    return JSON.parse( sessionStorage.getItem('currentUser'));
  }

  public set CurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify( user));
  }
}
