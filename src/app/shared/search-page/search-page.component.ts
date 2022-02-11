import { Component, OnInit } from '@angular/core';
import {Jewellery, Time} from '../interfaces';
import {AwiService} from '../services/awi.service';
import {TimexService} from '../services/timex.service';
import {CasioService} from '../services/casio.service';
import {HublotService} from '../services/hublot.service';
import {SvarovskiService} from '../services/svarovski.service';
import {ArmaniService} from '../services/armani.service';
import {LouisVuittonService} from '../services/louis-vuitton.service';
import {CartierService} from '../services/cartier.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  timex: Time[];
  awi: Time[];
  casio: Time[];
  hublot: Time[];
  svarovski: Jewellery[];
  armani: Jewellery[];
  louisVuitton: Jewellery[];
  cartier: Jewellery[];

  inputText = '';

  constructor(
    private timexService: TimexService,
    private awiService: AwiService,
    private casioService: CasioService,
    private hublotService: HublotService,
    private svarovskiService: SvarovskiService,
    private armaniService: ArmaniService,
    private louisVuittonService: LouisVuittonService,
    private cartierService: CartierService
              ) { }

  ngOnInit(): void {
    this.timexService.getTimex().subscribe(
      (data) => {this.timex = data; },
      (error) => {console.warn(error.message); }
    );
    this.awiService.getAwi().subscribe(
      (data) => {this.awi = data; },
      (error) => {console.warn(error.message); }
    );
    this.casioService.getCasio().subscribe(
      (data) => {this.casio = data; },
      (error) => {console.warn(error.message); }
    );
    this.hublotService.getHublot().subscribe(
      (data) => {this.hublot = data; },
      (error) => {console.warn(error.message); }
    );
    this.svarovskiService.getSvarovski().subscribe(
      (data) => {this.svarovski = data; },
      (error) => {console.warn(error.message); }
    );
    this.armaniService.getArmani().subscribe(
      (data) => {this.armani = data; },
      (error) => {console.warn(error.message); }
    );
    this.louisVuittonService.getLouisVuitton().subscribe(
      (data) => {this.louisVuitton = data; },
      (error) => {console.warn(error.message); }
    );
    this.cartierService.getCartier().subscribe(
      (data) => {this.cartier = data; },
      (error) => {console.warn(error.message); }
    );
  }

}
