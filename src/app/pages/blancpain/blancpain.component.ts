import {Component, OnDestroy, OnInit} from '@angular/core';
import {Brands} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {BlancpainService} from '../../shared/services/blancpain.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blancpain',
  templateUrl: './blancpain.component.html',
  styleUrls: ['./blancpain.component.css']
})
export class BlancpainComponent implements OnInit, OnDestroy {

  blancpain: Brands[];
  error: string;
  flag = false;
  aSub: Subscription;
  constructor(private blancpainService: BlancpainService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.aSub =  this.blancpainService.getBlancpain().subscribe(
      (data) => { this.blancpain = data},
      (error) => { this.error = error.message; }
    );
  }
  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }
  foo() {
    this.flag = !this.flag;
  }
}
