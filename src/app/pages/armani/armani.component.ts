import { Component, OnInit } from '@angular/core';
import {Jewellery} from '../../shared/interfaces';;
import {ArmaniService} from '../../shared/services/armani.service';

@Component({
  selector: 'app-armani',
  templateUrl: './armani.component.html',
  styleUrls: ['./armani.component.css']
})
export class ArmaniComponent implements OnInit {

  armani: Jewellery[];
  error: string;
  constructor(private armaniService: ArmaniService) { }

  ngOnInit(): void {
    this.armaniService.getArmani().subscribe(
      (data) => { this.armani = data; },
      (error) => { this.error = error.message; }
    );
  }

}
