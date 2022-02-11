import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brands} from '../../shared/interfaces';
import {RolexService} from '../../shared/services/rolex.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rolex',
  templateUrl: './rolex.component.html',
  styleUrls: ['./rolex.component.css']
})
export class RolexComponent implements OnInit, OnDestroy {

  rolex: Brands[];
  error: string;
  flag = false;
  aSub: Subscription;

  constructor(private rolexService: RolexService) { }

  ngOnInit(): void {
      this.rolexService.getRolex().subscribe(
        (data) => { this.rolex = data},
        (error) => { this.error = error.message; }
      );
  }
  ngOnDestroy(): void {
    if (this.aSub)
      this.aSub.unsubscribe();
  }
  foo() {
    this.flag = !this.flag;
  }
}
