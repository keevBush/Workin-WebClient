import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StaticConfig} from '../configurations/static-config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeurService {

  constructor(private httpClient: HttpClient, private staticConfig: StaticConfig) { }

  getDemandeur(id: string): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}demadeur/${id}`);
  }

  getPublication(id: string): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}demadeur/publications/${id}`);
  }

  getPublications(page: number): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}demadeur/publications/page/${page}`);
  }

  like(idPublication: string, idEntreprise: string): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}demadeur/publications/${idPublication}/like/${idEntreprise}`);
  }

  getRanking(id: string): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}demadeur/${id}/ranking`);
  }
}
