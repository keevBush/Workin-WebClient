import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
