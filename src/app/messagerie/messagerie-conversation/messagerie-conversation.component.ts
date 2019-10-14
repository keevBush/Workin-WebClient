import { Component, OnInit } from '@angular/core';
import {window} from 'rxjs/operators';

@Component({
  selector: 'app-messagerie-conversation',
  templateUrl: './messagerie-conversation.component.html',
  styleUrls: ['./messagerie-conversation.component.css']
})
export class MessagerieConversationComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  onstorage = (e):any=>{
    console.log(e);
  };
    // localStorage.clear();
    // console.log("clear");
  }

}
