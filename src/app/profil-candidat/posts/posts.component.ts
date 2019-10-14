import { Component, OnInit } from '@angular/core';
import {DemandeurService} from '../../services/demandeur.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {DemandeurIdentite2} from '../../models/structures/demandeur-identite2';
import {EmployeurServiceService} from '../../services/employeur-service.service';
import {CommentaireSend} from '../../models/structures/commentaire-send';
import {Commentaire} from '../../models/structures/commentaire';

import {EmployeurIdentite} from '../../models/structures/employeur-identite';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  likes = [];
  comments = [];
  tags = [];
  candidat: DemandeurIdentite2 =  new DemandeurIdentite2();
  idPublication: string;
  idCandidat: string;
  typePublication: number;
  data: string;
  isLiked: boolean;
  legende: string;
  currentComment: string;
  constructor(private authServices: AuthService, private emplouyeurService: EmployeurServiceService, private demandeurService: DemandeurService, private route: ActivatedRoute) {}
  commenter() {
    const entreprise = this.authServices.CurrentUser;
    console.log(`${this.currentComment}`);
    const commentSend = new CommentaireSend();
    commentSend.employeur = entreprise;
    commentSend.commentaire = new Commentaire();
    commentSend.commentaire.date = new Date(Date.now());
    commentSend.commentaire.value = this.currentComment;
    this.emplouyeurService.commenter(this.idPublication, commentSend).subscribe(value => {
        this.currentComment = '';
        this.comments.push(value);
      }
    , error1 => {
        console.log(error1);
    });
  }
  like() {
    this.demandeurService.like(this.idPublication, this.authServices.CurrentUser.id ).subscribe(value => {
      location.reload();
      console.log(value);
    }, error1 => {
      console.log(error1);
    });
  }
  ngOnInit() {
    this.idCandidat =  this.route.snapshot.paramMap.get('id');
    this.idPublication =  this.route.snapshot.paramMap.get('idPost');
    this.demandeurService.getPublication(this.idPublication).subscribe(value => {
      console.log(value);
      this.likes = value.likes.filter(l => l.etat === true);
      if (this.likes.filter(l => l.id === this.authServices.CurrentUser.id).length !== 0) {
        this.isLiked = true;
      } else {
        this.isLiked = false;
      }
      this.data = value.details.value;
      this.legende = value.details.legende;
      this.candidat = value.demandeur;
      this.typePublication = value.details.typePublication;
      this.tags = value.details.tag;
      this.comments = value.commentaires;
      console.log(this.comments);
    }, error1 => {
      console.log(error1);
    });
  }

}
