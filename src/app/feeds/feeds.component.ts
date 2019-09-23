import { Component, OnInit } from '@angular/core';
import {DemandeurService} from '../services/demandeur.service';
import {delay} from 'rxjs/operators';
import {AuthService} from '../services/auth/auth.service';
import {Genre} from '../models/structures/genre.enum';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.css']
})
export class FeedsComponent implements OnInit {

  constructor(private demandeurService: DemandeurService, private authService: AuthService) {
    this.loadData(this.CurrentPage);
  }
  CurrentPage = 0;
  publications = [];
  isLoading: boolean ;
  isLoading2: boolean ;
  ngOnInit() {
  }

  trackByFn(index, station) {
    return station.id;
  }

  like(idPublication: string, index: number) {
    this.demandeurService.like(idPublication, this.authService.CurrentUser.id ).subscribe(value => {
      location.reload();
      console.log(value);
    }, error1 => {
      console.log(error1);
    });
  }

  loadData(page: number) {
    this.isLoading2 = true;
    this.CurrentPage ++;
    this.isLoading = true;
    this.demandeurService.getPublications(this.CurrentPage).subscribe(value => {
      console.log(value);
      value.forEach(p => this.publications.push(p));
    }, error1 => {
      console.log(error1);
    });
    this.isLoading = false;
  }
  loadMore(e) {
    if (e === 'bottom') {
      this.loadData(this.CurrentPage);
    }
    console.log(e);
  }
  delay(ms: number): Promise<any> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
