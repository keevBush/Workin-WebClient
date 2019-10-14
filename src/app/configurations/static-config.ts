import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaticConfig {
  //private host = 'https://workin-api.azurewebsites.net/api/';
  private host = 'https://api-bush.azurewebsites.net/api/';
  public get Host(): string {
    return this.host;
  }
}
