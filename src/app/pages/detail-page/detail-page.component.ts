import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  id: string;
  model: string;
  price: number;
  url: string;
  titile: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.model = this.activatedRoute.snapshot.queryParams['model'];
    this.price = this.activatedRoute.snapshot.queryParams['price'];
    this.url = this.activatedRoute.snapshot.queryParams['url'];
    this.titile = this.activatedRoute.snapshot.queryParams['titile'];
  }

}
