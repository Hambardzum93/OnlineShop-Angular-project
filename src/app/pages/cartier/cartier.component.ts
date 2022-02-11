import { Component, OnInit } from '@angular/core';
import {Jewellery} from '../../shared/interfaces';
import {CartierService} from '../../shared/services/cartier.service';

@Component({
  selector: 'app-cartier',
  templateUrl: './cartier.component.html',
  styleUrls: ['./cartier.component.css']
})
export class CartierComponent implements OnInit {

  cartier: Jewellery[];
  error: string;
  constructor(private cartierService: CartierService) { }

  ngOnInit(): void {
    this.cartierService.getCartier().subscribe(
      (data) => { this.cartier = data; },
      (error) => { this.error = error.message; }
    );
  }

}
