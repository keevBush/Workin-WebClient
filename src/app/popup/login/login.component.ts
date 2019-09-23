import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeurIdentite} from '../../models/structures/employeur-identite';
import {sha256} from 'js-sha256';
import {EmployeurServiceService} from '../../services/employeur-service.service';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
// import {LottieOptions} from 'ngx-lottie';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public lottieConfig: any;
  constructor(private httpClient: HttpClient, private employeurService: EmployeurServiceService,
              private authService: AuthService, private router: Router) {
    this.lottieConfig = {
      path: '../../assets/40-loading.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }
  isError: boolean ;
  errorMessage = '';
  isLoading: boolean;
  email: string;
  password: string;
  ngOnInit() {
  }

  onSubmit() {
    try {
      this.isError = false;
      console.log('ok');
      this.isLoading = true;
      const user = new EmployeurIdentite();
      user.email = this.email;
      user.motDePasse = sha256(this.password);
      this.employeurService.login(user).subscribe((data) => {
        this.isLoading = false;
        this.authService.setToken(data.token);
        this.authService.CurrentUser = data.entreprise;
        this.isLoading = false;
        this.router.navigate(['feeds']);
      }, error1 => {
        this.isError = true;
        this.errorMessage = error1.error;
      });
    } catch (e) {
      console.log(e.error);
      this.errorMessage = e.error;
    }
  }
}
