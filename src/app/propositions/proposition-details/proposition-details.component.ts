import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PropositionService} from '../../services/proposition.service';
import {Offre} from '../../models/structures/offre';
import {DomSanitizer} from '@angular/platform-browser';
import {TypeOffre} from '../../models/structures/type-offre.enum';
import {DemandeurIdentite} from '../../models/structures/demandeur-identite';
import {Genre} from '../../models/structures/genre.enum';

@Component({
  selector: 'app-proposition-details',
  templateUrl: './proposition-details.component.html',
  styleUrls: ['./proposition-details.component.css']
})
export class PropositionDetailsComponent implements OnInit {
  htmlData: any;
  participantArray: Array<DemandeurIdentite> = new Array<DemandeurIdentite>();
  typeOffre = TypeOffre;
  currentDate = new Date( Date.now());
  typeGender = Genre;
  constructor(private route: ActivatedRoute,
              private propositionService: PropositionService,
              private sanitizer: DomSanitizer) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.propositionService.getCurrentProposition(this.id).subscribe(value => {
      console.log(value);
      this.offre = value.offre;
      this.htmlData = this.sanitizer.bypassSecurityTrustHtml(value.offre.details);
      this.participantArray = value.demandeursInteressees;
    }, error1 => {
      console.log(error1);
    });
  }
  id: string;
  offre: Offre =  new Offre();
  ngOnInit() {

  }
  diff_years(dt1) {
    let diff = (new Date (Date.now()).getTime() - new Date (dt1).getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25)) - 1;
  }
}


