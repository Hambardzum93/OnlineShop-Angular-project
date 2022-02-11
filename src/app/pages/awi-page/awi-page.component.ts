import { Component, OnInit } from '@angular/core';

import {AwiService} from '../../shared/services/awi.service';
import {Time} from '../../shared/interfaces';

@Component({
  selector: 'app-awi-page',
  templateUrl: './awi-page.component.html',
  styleUrls: ['./awi-page.component.css']
})
export class AwiPageComponent implements OnInit {
  awi: Time[];
  error: string;

  constructor(private awiService: AwiService) { }

  ngOnInit(): void {
    this.awiService.getAwi().subscribe(
      (data) => { this.awi = data; },
      (error) => { this.error = error.message; }
    );
  }

}
