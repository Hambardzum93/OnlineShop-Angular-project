import { Component, OnInit } from '@angular/core';
import {Time} from '../../shared/interfaces';
import {HublotService} from '../../shared/services/hublot.service';

@Component({
  selector: 'app-hublot-page',
  templateUrl: './hublot-page.component.html',
  styleUrls: ['./hublot-page.component.css']
})
export class HublotPageComponent implements OnInit {

  hublot: Time[];
  error: string;

  constructor(private hublotService: HublotService) { }

  ngOnInit(): void {
    this.hublotService.getHublot().subscribe(
      (data) => { this.hublot = data; },
      (error) => { this.error = error.message; }
    );
  }
}
