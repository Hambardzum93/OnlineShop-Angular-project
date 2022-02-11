import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-chaneldetail',
  templateUrl: './chaneldetail.component.html',
  styleUrls: ['./chaneldetail.component.css']
})
export class ChaneldetailComponent implements OnInit {
  id: number;
  model: string;
  price: number;
  url: string;
  titile: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.price = +params.price;
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.titile = params.titile;
      this.model = params.model;
      this.url = params.url;
    });
  }


}
