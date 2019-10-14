import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProfilCandidatComponent } from './profil-candidat/profil-candidat.component';
import { ProfilCandidatDetailsComponent } from './profil-candidat/profil-candidat-details/profil-candidat-details.component';
import { ProfilCandidatDataComponent } from './profil-candidat/profil-candidat-data/profil-candidat-data.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { PopupComponent } from './popup/popup.component';
import { LoginComponent } from './popup/login/login.component';
import { NewEntrepriseComponent } from './popup/new-entreprise/new-entreprise.component';
import { AcceuilDetailsFiltersComponent } from './acceuil/acceuil-details-filters/acceuil-details-filters.component';
import { FooterComponent } from './footer/footer.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {FormsModule} from '@angular/forms';
import { ProfilEntrepriseComponent } from './profil-entreprise/profil-entreprise.component';
import { ProfilEntrepriseDetailsComponent } from './profil-entreprise/profil-entreprise-details/profil-entreprise-details.component';
import { ProfilEntrepriseDataComponent } from './profil-entreprise/profil-entreprise-data/profil-entreprise-data.component';
import { ProfilEntrepriseEditComponent } from './profil-entreprise/profil-entreprise-edit/profil-entreprise-edit.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MessagerieConversationComponent } from './messagerie/messagerie-conversation/messagerie-conversation.component';
import {Route, Router, RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {AuthService} from './services/auth/auth.service';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import { PropositionsComponent } from './propositions/propositions.component';
import {NewPropositionComponent} from './propositions/new-proposition/new-proposition.component';
import { HomeComponent } from './home/home.component';
import {LottieAnimationViewModule} from 'ng-lottie';
import {MatProgressSpinnerModule} from '@angular/material';
import { PropositionDetailsComponent } from './propositions/proposition-details/proposition-details.component';
import { ENumAsStringPipe } from './pipes/e-num-as-string.pipe';
import { FeedsComponent } from './feeds/feeds.component';
import { PostsComponent } from './profil-candidat/posts/posts.component';
import { PubliciteComponent } from './feeds/publicite/publicite.component';
import { ScrollableDirective } from './directives/scrollable.directive';
import { ExtractLikePipe } from './pipes/extract-like.pipe';
import {TimeAgoPipe} from 'time-ago-pipe';
import { PredictionComponent } from './prediction/prediction.component';
import { ListToStringPipe } from './pipes/list-to-string.pipe';



const appRoutes: Routes = [
  {path: 'acceuil' , redirectTo: ''},
  {path: 'home' , component: HomeComponent, canActivate : [AuthGuardService]},
  {path: '' , component: AcceuilComponent},
  {path: 'propositions/nouvelle' , component: NewPropositionComponent, canActivate : [AuthGuardService]},
  {path: 'propositions/:id' , component: PropositionDetailsComponent},
  {path: 'profil' , component: ProfilEntrepriseComponent, canActivate : [AuthGuardService] },
  {path: 'profil/edit' , component: ProfilEntrepriseEditComponent, canActivate : [AuthGuardService] },
  {path: 'candidat/:id' , component: ProfilCandidatComponent, canActivate : [AuthGuardService] },
  {path: 'candidat/:id/posts/:idPost' , component: PostsComponent, canActivate : [AuthGuardService] },
  {path: 'prediction' , component: PredictionComponent, canActivate: [AuthGuardService] },
  {path: 'feeds' , component: FeedsComponent, canActivate : [AuthGuardService] }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfilCandidatComponent,
    ProfilCandidatDetailsComponent,
    ProfilCandidatDataComponent,
    AcceuilComponent,
    PopupComponent,
    LoginComponent,
    NewEntrepriseComponent,
    AcceuilDetailsFiltersComponent,
    FooterComponent,
    ProfilEntrepriseComponent,
    ProfilEntrepriseDetailsComponent,
    ProfilEntrepriseDataComponent,
    ProfilEntrepriseEditComponent,
    MessagerieComponent,
    MessagerieConversationComponent,
    NewPropositionComponent,
    PropositionsComponent,
    HomeComponent,
    PropositionDetailsComponent,
    ENumAsStringPipe,
    FeedsComponent,
    PostsComponent,
    PubliciteComponent,
    ScrollableDirective,
    ExtractLikePipe,
    TimeAgoPipe,
    PredictionComponent,
    ListToStringPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuardService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS } , JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
