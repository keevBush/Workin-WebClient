import { Component, OnInit } from '@angular/core';
import {Offre} from '../../models/structures/offre';
import {TypeOffre} from '../../models/structures/type-offre.enum';
import {Proposition} from '../../models/structures/proposition';
import {EmployeurIdentite} from '../../models/structures/employeur-identite';
import {DemandeurIdentite} from '../../models/structures/demandeur-identite';

@Component({
  selector: 'app-acceuil-details-filters',
  templateUrl: './acceuil-details-filters.component.html',
  styleUrls: ['./acceuil-details-filters.component.css']
})
export class AcceuilDetailsFiltersComponent implements OnInit {

  constructor() { }
  propositions: Array<Proposition> = new Array<Proposition>() ;


  ngOnInit() {
    for ( let i = 0 ; i < 10 ; i++) {
      const p = new Proposition();
      p.id = `key${i}`;
      p.employeur = new EmployeurIdentite();
      p.employeur.nom = `Entreprise ${i}`;
      p.demandeursInteressees = new Array<DemandeurIdentite>();
      const o = new Offre();
      o.id = `key${i}`;
      o.deadline = new Date( Date.now());
      o.description = `description ${i}`;
      o.maxParticipant = null;
      o.nomPoste = `Poste ${i}`;
      o.typeOffre = TypeOffre.Public;
      o.minimumDetails = `Minimum details ${i}`;
      o.competences = new Array<string>();
      for ( let j = 0 ; j < 2 ; j++) {
        o.competences.push(`competence ${j}`);
      }
      p.offre = o;
      this.propositions.push(p);
    }
  }
  valueChange(x) {
    console.log(x);
  }

}
