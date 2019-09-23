import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Message} from '../models/structures/message';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  messages: Array<Message> = new Array<Message>();
  constructor( public authService: AuthService) {

  }

  deconnection() {
    this.authService.disconnect();
    location.reload();
  }
  ngOnInit() {
    for (let i = 0 ; i < 5; i++) {
      const msg = new Message();
      msg.date = new Date(Date.now());
      msg.msg = `contenu ${i}`;
      msg.isRead = true ;
      this.messages.push(msg);
    }
  }
}
