import { Component, OnInit } from '@angular/core';
import {EmployeurServiceService} from '../../services/employeur-service.service';
import {StaticConfig} from '../../configurations/static-config';
import {AuthService} from '../../services/auth/auth.service';
import {TypeOffre} from '../../models/structures/type-offre.enum';

@Component({
  selector: 'app-profil-entreprise-data',
  templateUrl: './profil-entreprise-data.component.html',
  styleUrls: ['./profil-entreprise-data.component.css']
})
export class ProfilEntrepriseDataComponent implements OnInit {

  constructor(private entrepriseServices: EmployeurServiceService, private staticConfig: StaticConfig, private authService: AuthService) {
    this.isLoadingOne = true;
    this.isLoadingTwo = true;

  }
  isLoadingOne: boolean;
  isLoadingTwo: boolean;
  typeOffre: TypeOffre;

  propositions: [];
  publicites: [];
  ngOnInit() {
    this.entrepriseServices.getPublicitesAndPropposition(this.authService.CurrentUser.id).subscribe(value => {
      this.propositions = value.propositions;
      this.publicites = value.publicites;
      console.log(this.propositions);
      this.isLoadingOne = false;
      this.isLoadingTwo = false;

    }, error1 => {
      console.log(error1);
    });
  }

}
