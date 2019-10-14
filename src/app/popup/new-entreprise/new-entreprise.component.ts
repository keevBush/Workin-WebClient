import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeurIdentite} from '../../models/structures/employeur-identite';
import {StaticConfig} from '../../configurations/static-config';
import {EmployeurServiceService} from '../../services/employeur-service.service';
import {isBoolean} from 'util';
import {sha256} from 'js-sha256';
import {Error} from 'tslint/lib/error';

@Component({
  selector: 'app-new-entreprise',
  templateUrl: './new-entreprise.component.html',
  styleUrls: ['./new-entreprise.component.css']
})
export class NewEntrepriseComponent implements OnInit {

  constructor(private httpClient: HttpClient, private staticConfig: StaticConfig, private employerService: EmployeurServiceService) { }
  allCountry: Array <any> ;
  isAccepted = true;
  success = {
    isSuccess: false,
    successMessage : 'Registration has successful, check your email for confirm account'
};
  error = {
    isError: false,
    errorMessage: ' '
  };
  password2: string;
  newUser: EmployeurIdentite = new EmployeurIdentite() ;
  newUserConfirm: EmployeurIdentite = new EmployeurIdentite() ;
  ngOnInit() {
    this.httpClient.get('https://restcountries.eu/rest/v2/all?fields=name').subscribe((data) => {
      this.allCountry = JSON.parse(JSON.stringify(data)) ;
    }, ex => {
      this.allCountry = new Array<any>();
      this.allCountry.push({name : 'RDC'});
      this.allCountry.push({name : 'Zambia'});
      this.allCountry.push({name : 'France'});
      this.error.isError = true;
      this.error.errorMessage = 'Erreur Une erreur a été rencontré';
    });
  }
  onSubmit() {
    try {
      if (this.password2 !== this.newUser.motDePasse) {
        throw new Error('Les mot de passe ne correspondent pas ...');
      }
      this.newUserConfirm.nom = this.newUser.nom;
      this.newUserConfirm.pays = this.newUser.pays;
      this.newUserConfirm.email = this.newUser.email;
      this.newUserConfirm.adresse = this.newUser.adresse + ', ' + this.newUser.pays;
      this.newUserConfirm.motDePasse = sha256(this.newUser.motDePasse);
      console.log(this.newUserConfirm);
      this.employerService.newUser(this.newUserConfirm).subscribe(() => {
        this.error.isError = false;
        this.success.isSuccess = true;
      }, error1 => {
        this.error.isError = true;
        this.error.errorMessage = `${error1.message} `;
        throw new Error(error1.message);
      });

    } catch (e) {
      this.error.isError = true;
      this.error.errorMessage = `${e.message} `;
     }
  }
}
