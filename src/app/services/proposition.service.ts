import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StaticConfig} from '../configurations/static-config';
import {AuthService} from './auth/auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropositionService {

  constructor(private httpClient: HttpClient, private staticConfig: StaticConfig, private authService: AuthService) { }

  getCurrentProposition(id: string): Observable<any> {
    return this.httpClient.get(`${this.staticConfig.Host}entreprise/${this.authService.CurrentUser.id}/propositions/${id}`);
  }
}
