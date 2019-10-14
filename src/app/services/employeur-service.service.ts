import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {StaticConfig} from '../configurations/static-config';
import {EmployeurIdentite} from '../models/structures/employeur-identite';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {promise} from 'selenium-webdriver';
import {reject, resolve} from 'q';
import {Offre} from '../models/structures/offre';
import {CommentaireSend} from '../models/structures/commentaire-send';

@Injectable({
  providedIn: 'root'
})
export class EmployeurServiceService {
  constructor(private httpClient: HttpClient, private authService: AuthService,
              private staticConfig: StaticConfig, private router: Router) { }

   newUser(user): Observable<object> {
    const options = {headers : new HttpHeaders()};
    return this.httpClient.post( `${this.staticConfig.Host}entreprise/inscription`, user);
  }
  login(crediential: EmployeurIdentite): Observable<any> {
    return this.httpClient.post(`${this.staticConfig.Host}entreprise/connexion`, crediential);
  }
  newProposition(offre: Offre): Observable<any> {
    return  this.httpClient.post(`${this.staticConfig.Host}entreprise/${this.authService.CurrentUser.id}/propositions/new`, offre);
  }
  commenter(idPublication: string, commentaireSend: CommentaireSend): Observable<any> {
    return  this.httpClient.post(`${this.staticConfig.Host}entreprise/commenter/${idPublication}`, commentaireSend);
  }
  prediction(competences: Array<string>): Observable<any> {
    return this.httpClient.post(`${this.staticConfig.Host}entreprise/prediction`, competences);
  }

  getPublicitesAndPropposition(id: string): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}entreprise/${id}/dataprofil`);
  }

  uploadFile(id: string, type: string, formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.staticConfig.Host}entreprise/${id}/upload/type/${type}`, formData, {reportProgress: true, observe: 'events'});
  }

  updateField(id: string, type: number, employeur: EmployeurIdentite) {
    return this.httpClient.post(`${this.staticConfig.Host}entreprise/${id}/update/${type}`, employeur);
  }
}
