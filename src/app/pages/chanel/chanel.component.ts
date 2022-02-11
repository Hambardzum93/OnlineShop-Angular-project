import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brands} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {ChanelService} from '../../shared/services/chanel.service';

@Component({
  selector: 'app-chanel',
  templateUrl: './chanel.component.html',
  styleUrls: ['./chanel.component.css']
})
export class ChanelComponent implements OnInit, OnDestroy {
  chanel: Brands[];
  error: string;
  flag = false;
  aSub: Subscription;
  constructor(private chanelService: ChanelService) { }

  ngOnInit(): void {
    this.chanelService.getChanel().subscribe(
      (data) => { this.chanel = data},
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
