import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  outFlag = true;
  name: string;
  password: string;
  per = 1;
  constructor(private authService: AuthService,
              private routes: Router) { }

  ngOnInit(): void {
  }
  login() {
    // tslint:disable-next-line:triple-equals
    if(this.name == 'ham' && this.password == '8888') {
      this.authService.login();
      this.routes.navigate(['/brands']);
    }
    this.name = this.password = '';
  }

  flag() {
    if(this.authService.isAuth()) return true;
    return false;
  }

}
