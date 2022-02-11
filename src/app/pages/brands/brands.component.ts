import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }
  // foo() {
  //   this.authService.logout();
  //   this.router.navigate(['/']);
  // }
}
