import { Component, OnInit } from '@angular/core';
import {CasioService} from '../../shared/services/casio.service';
import {Time} from '../../shared/interfaces';

@Component({
  selector: 'app-casio-page',
  templateUrl: './casio-page.component.html',
  styleUrls: ['./casio-page.component.css']
})
export class CasioPageComponent implements OnInit {

  casio: Time[];
  error: string;

  constructor(private casioService: CasioService) { }

  ngOnInit(): void {
    this.casioService.getCasio().subscribe(
      (data) => { this.casio = data; },
      (error) => { this.error = error.message; }
    );
  }

}
