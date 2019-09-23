import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AuthService} from '../../services/auth/auth.service';
import {Offre} from '../../models/structures/offre';
import * as uuid from 'uuid';
import {EmployeurServiceService} from '../../services/employeur-service.service';

@Component({
  selector: 'app-new-proposition',
  templateUrl: './new-proposition.component.html',
  styleUrls: ['./new-proposition.component.css']
})
export class NewPropositionComponent implements OnInit {
  public Editor = ClassicEditor;
  editorContent = {
    data: ''
  };
  offre: Offre = new Offre();
    isInternational = false;
    isLoading: boolean;
    competances: string ;
    constructor(private authService: AuthService, private employeurService: EmployeurServiceService ) { }
    onSubmit() {
      this.isLoading = true;
      this.offre.id = uuid.v4();
      this.offre.competences = this.competances.toUpperCase().split(',');
      for (let i = 0 ; i < this.offre.competences.length; i++) {
        this.offre.competences[i] = this.offre.competences[i].trim();
      }
      this.offre.details = this.editorContent.data;
      console.log(this.offre);
      this.employeurService.newProposition(this.offre).subscribe((data) => {
        console.log(data);
        this.isLoading = false;
        },
      error1 => {
        this.isLoading = false;
        console.log(error1);
      });
    }
    ngOnInit() {
      console.log(this.authService.isAuthenticated);
    }
  }
