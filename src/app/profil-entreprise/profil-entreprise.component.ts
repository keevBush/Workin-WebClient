import { Component, OnInit } from '@angular/core';
import {EmployeurServiceService} from '../services/employeur-service.service';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {

  constructor(private entrepriseService: EmployeurServiceService, private authService: AuthService) { }

  ngOnInit() {

  }

}
