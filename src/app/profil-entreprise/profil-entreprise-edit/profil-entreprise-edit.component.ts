import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {EmployeurServiceService} from '../../services/employeur-service.service';
import {HttpEventType} from '@angular/common/http';
import {EmployeurIdentite} from '../../models/structures/employeur-identite';
import {sha256} from 'js-sha256';

@Component({
  selector: 'app-profil-entreprise-edit',
  templateUrl: './profil-entreprise-edit.component.html',
  styleUrls: ['./profil-entreprise-edit.component.css']
})
export class ProfilEntrepriseEditComponent implements OnInit {

  constructor(private authService: AuthService, private employeurService: EmployeurServiceService) { }
  public process: number;
  isLoading: boolean;
  isLoading2: boolean;
  isLoading3: boolean;
  isError: boolean;
  img: string;
  password2: string;
  domainesString: string;
  password1: string;
  passwordConfirm: string;
  employeurIdentite = new EmployeurIdentite();
  isSuccess: boolean;
  errorMessage: string;
  successMessage: string;
  ngOnInit() {
    this.img = this.authService.CurrentUser.profil;
    this.employeurIdentite = this.authService.CurrentUser;
    console.log(this.authService.CurrentUser.domaines.join(','));
    this.domainesString = this.authService.CurrentUser.domaines.join(',');
  }

  updateFirstInfo() {
    try {
      this.isLoading3 = true;

      this.employeurService.updateField(this.authService.CurrentUser.id,  1, this.employeurIdentite).subscribe(value =>  {
        this.isSuccess = true;
        this.isLoading3 = false;
        this.isError = false;
        this.successMessage = value.toString();
        const user = this.authService.CurrentUser;
        user.nom = this.employeurIdentite.nom;
        user.adresse = this.employeurIdentite.adresse;
        user.idNational = this.employeurIdentite.idNational;
        this.authService.CurrentUser = user;
      }, error1 => {
        console.log(error1);
      });
    } catch (e) {
      this.isLoading3 = false;
      this.isError = true;
      this.errorMessage = `${e.message}`;
      console.log(e);
  }
}

  updateThirdInfo() {
    try {
      this.isLoading3 = true;
      this.employeurIdentite.domaines = this.domainesString.split(',');
      this.employeurService.updateField(this.authService.CurrentUser.id, 3 , this.employeurIdentite).subscribe(value => {
        const user = this.authService.CurrentUser;
        user.domaines = this.employeurIdentite.domaines;
        user.APropos = this.employeurIdentite.APropos;
        this.authService.CurrentUser = user;
        this.isSuccess = true;
        this.isLoading3 = false;
        this.isError = false;
        this.successMessage = value.toString();
      }, error1 => {
        this.isSuccess = false;
        this.isLoading3 = false;
        this.isError = true;
        this.successMessage = error1.message;
      });
    } catch (e) {
      alert('Une erreur est arrivé');
      this.isSuccess = false;
      this.isLoading3 = false;
      this.isError = true;
      this.successMessage = e.message;
    }
  }


  updateSecondInfo() {
    try {
      this.isLoading2 = true;
      const lastPassord = this.authService.CurrentUser.motDePasse;
      if (lastPassord === sha256 (this.password1)) {
        throw new Error(`Mot de passe similaire à l'ancien`);
      }
      if (this.password2 !== this.passwordConfirm) {
        throw  new Error(`Les mots de passe saisi ne correspondent pas`);
      }
      this.employeurIdentite.motDePasse = sha256 (this.password2);
      this.employeurService.updateField(this.authService.CurrentUser.id,  2, this.employeurIdentite).subscribe(value =>  {
        this.isSuccess = true;
        this.isLoading2 = false;
        this.isError = false;
        this.successMessage = value.toString();
        const user = this.authService.CurrentUser;
        user.motDePasse = sha256 (this.password2);
        this.authService.CurrentUser = user;
      }, error1 => {
        alert('Une erreur est arrivé');
        console.log(error1);
        this.isSuccess = false;
        this.isLoading2 = false;
        this.isError = true;
        this.errorMessage = `${error1.message}`;
      });
    } catch (e) {
      alert('Une erreur est arrivé');
      this.isSuccess = false;
      this.isLoading2 = false;
      this.isError = true;
      this.errorMessage = `${e.message}`;
    }
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    this.isLoading = true;
    const fileToUpload = files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.employeurService.uploadFile(this.authService.CurrentUser.id, 'profil', formData).subscribe((event) => {
      if (event.type === HttpEventType.UploadProgress) {
        this.process = Math.round( 100 * event.loaded / event.load);
      }
      if (event.type === HttpEventType.Response) {
        this.img = event.body;
        this.isLoading = false;
        const user = this.authService.CurrentUser;
        user.profil = event.body;
        this.authService.CurrentUser = user;
        this.successMessage = "Image de profil changé";
        this.isSuccess = true;
        this.isError = false;
      }
    }, error1 => {
      alert("Erreur");
      this.isError = true;
      this.isSuccess = false;
      this.errorMessage = error1.message;
    });
  }
}
