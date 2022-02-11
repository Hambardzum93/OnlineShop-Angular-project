import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brands} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlancpainService {

  constructor(private http: HttpClient) { }
  getBlancpain(): Observable<Brands[]>{
    return this.http.get<Brands[]>('http://localhost:3000/blancpain');
  }
}
