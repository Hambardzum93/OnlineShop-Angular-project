import { Component, OnInit } from '@angular/core';
import {SvarovskiService} from '../../shared/services/svarovski.service';
import {Jewellery} from '../../shared/interfaces';

@Component({
  selector: 'app-svarovski',
  templateUrl: './svarovski.component.html',
  styleUrls: ['./svarovski.component.css']
})
export class SvarovskiComponent implements OnInit {

  svarovski: Jewellery[];
  error: string;
  constructor(private svarovskiService: SvarovskiService) { }

  ngOnInit(): void {
    this.svarovskiService.getSvarovski().subscribe(
      (data) => { this.svarovski = data; },
      (error) => { this.error = error.message; }
    );
  }

}
