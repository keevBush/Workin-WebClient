import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {EmployeurServiceService} from '../../services/employeur-service.service';
import {TypeOffre} from '../../models/structures/type-offre.enum';

@Component({
  selector: 'app-profil-entreprise-details',
  templateUrl: './profil-entreprise-details.component.html',
  styleUrls: ['./profil-entreprise-details.component.css']
})
export class ProfilEntrepriseDetailsComponent implements OnInit {

  constructor(private entrepriseService: EmployeurServiceService, public authService: AuthService) { }
  isLoading: boolean;
  propositions: [];
  publicites: [];

  ngOnInit() {
    this.isLoading = true;
    this.entrepriseService.getPublicitesAndPropposition(this.authService.CurrentUser.id).subscribe(value => {
      this.propositions = value.propositions;
      this.publicites = value.publicites;
      this.isLoading = false;
    }, error1 => {
      console.log(error1);
    });
  }

}
