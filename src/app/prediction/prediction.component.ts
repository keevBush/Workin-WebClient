import { Component, OnInit } from '@angular/core';
import {EmployeurServiceService} from '../services/employeur-service.service';
import {Genre} from '../models/structures/genre.enum';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  constructor(private employeurService: EmployeurServiceService) { }
  isLoading: boolean;
  predictions: [];
  genre: Genre;
  competences: string;
  isError: boolean;
  messageError: string;
  isZero: boolean;
  isZeroMessage: string;
  ngOnInit() {
  }
  loadCandidat() {
    try {
      this.isLoading = true;
      this.isError = false;
      this.isZero = false;
      if (this.competences === null) {
        throw new Error('Saisir les données');
      }
      const arrayCompetences = this.competences.toUpperCase().replace(' ', '').split(',');
      console.log(arrayCompetences);
      this.employeurService.prediction(arrayCompetences).subscribe(value => {
        console.log(value);
        this.predictions = value;
        if (this.predictions.length === 0) {
          this.isZero = true;
          this.isZeroMessage = `Aucun candidats ne corresponds à ces critères, mettez des critères plus générique afin d 'avoir des meilleurs résultats.Ex. Photograph, Web Developpement`;
        }
        if (this.predictions.length !== 0 && this.predictions.length < 4) {
          this.isZero = true;
          this.isZeroMessage = `Nous avons remarqué que le résultat est faible ,mettez des critères plus générique afin d'avoir des meilleurs résultats.Ex. Photograph, Web Developpement`;
        }
        this.isLoading = false;
      },  error1 => {
        console.log(error1);
        this.predictions = [];
        this.isError = true;
        this.isLoading = false;
      });
    } catch (e) {
      this.isError =  true;
      this.isLoading = false;
      this.messageError = `${e}`;
    }
  }
}
