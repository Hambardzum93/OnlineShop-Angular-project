import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brands} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {LonginesService} from '../../shared/services/longines.service';

@Component({
  selector: 'app-longines',
  templateUrl: './longines.component.html',
  styleUrls: ['./longines.component.css']
})
export class LonginesComponent implements OnInit, OnDestroy {

  longines: Brands[];
  error: string;
  flag = false;
  aSub: Subscription;
  constructor(private longinesService: LonginesService) { }

  ngOnInit(): void {
    this.longinesService.getLongines().subscribe(
      (data) => { this.longines = data},
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
