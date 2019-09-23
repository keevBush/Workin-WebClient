import {Component, NgModule, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-profil-candidat-data',
  templateUrl: './profil-candidat-data.component.html',
  styleUrls: ['./profil-candidat-data.component.css']
})

export class ProfilCandidatDataComponent implements OnInit {

  constructor() { }
  editorContent = {
    data: ''
  };

  publications = [];

  public Editor = ClassicEditor;
  competances: Array<any> = new Array<any>();
  missions: Array<any> = new Array<any>();
  ngOnInit() {}

  onSubmit() {
    console.log(this.editorContent.data);
  }
  addData(data) {
    if (data === 'comp') {
      this.competances.push({});
    } else if (data === 'miss') {
      this.missions.push({});
    }
  }
  deleteData(data) {
    if (data === 'comp') {
      if (this.competances.length > 0) {
        this.competances.pop();
      }
    } else if (data === 'miss') {
      if ( this.missions.length > 0) {
        this.missions.pop();
      }
    }
  }
}
