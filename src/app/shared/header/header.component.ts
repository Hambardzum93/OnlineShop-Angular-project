import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService,  private router: Router) { }

  ngOnInit(): void {


  }

  foo() {
    this.authService.logout();
    this.router.navigate(['/']);
    alert('You are logged out');
  }

}
