import { Component, OnInit } from '@angular/core';
import {Jewellery} from '../../shared/interfaces';
import {LouisVuittonService} from '../../shared/services/louis-vuitton.service';

@Component({
  selector: 'app-louis-vuitton',
  templateUrl: './louis-vuitton.component.html',
  styleUrls: ['./louis-vuitton.component.css']
})
export class LouisVuittonComponent implements OnInit {

  louisVuitton: Jewellery[];
  error: string;
  constructor(private louisVuittonService: LouisVuittonService) { }

  ngOnInit(): void {
    this.louisVuittonService.getLouisVuitton().subscribe(
      (data) => { this.louisVuitton = data; },
      (error) => { this.error = error.message; }
    );
  }

}
