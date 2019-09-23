import { Component, OnInit } from '@angular/core';
import {DemandeurService} from '../../services/demandeur.service';
import {ActivatedRoute} from '@angular/router';
import {DemandeurIdentite} from '../../models/structures/demandeur-identite';
import {DemandeurIdentite2} from '../../models/structures/demandeur-identite2';
import {Offre} from '../../models/structures/offre';

@Component({
  selector: 'app-profil-candidat-details',
  templateUrl: './profil-candidat-details.component.html',
  styleUrls: ['./profil-candidat-details.component.css']
})
export class ProfilCandidatDetailsComponent implements OnInit {

  id: string;
  isLoading: boolean;
  competences = [];
  ranking: number;
  experiencesProffessionnelle = [];
  publications = [];
  constructor(private demandeurService: DemandeurService, private route: ActivatedRoute) {
    this.isLoading = true;
    this.demandeur.nom = 'Nom 1 ';
    this.id =  this.route.snapshot.paramMap.get('id');
    this.demandeurService.getDemandeur(this.id).subscribe(value => {
      console.log(( value));
      this.demandeur = value.identite
      this.publications = value.publications;
      this.competences = value.competances;

      this.experiencesProffessionnelle = value.experienceprofessionnelles;
      this.isLoading = false;
    }, error1 => {
      this.isLoading = false;


    });
    this.demandeurService.getRanking(this.id).subscribe(value => {
      this.ranking = value;
    });
  }

  ngOnInit() {
  }

  demandeur: DemandeurIdentite2 = new DemandeurIdentite2();

}
