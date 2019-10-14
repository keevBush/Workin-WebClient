import {Component, NgModule, OnInit} from '@angular/core';
import {providersResolver} from '@angular/core/src/render3/di_setup';
import {AuthGuardService} from '../services/auth/auth-guard.service';

@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
