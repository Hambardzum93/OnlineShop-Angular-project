import { Component, OnInit } from '@angular/core';
import {TimexService} from '../../shared/services/timex.service';
import { Time } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-timex-page',
  templateUrl: './timex-page.component.html',
  styleUrls: ['./timex-page.component.css']
})
export class TimexPageComponent implements OnInit {

  timex: Time[];
  error: string;

  constructor(private timexService: TimexService) { }

  ngOnInit(): void {
     this.timexService.getTimex().subscribe(
      (data) => { this.timex = data; },
      (error) => { this.error = error.message; }
    );
  }

}
