import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brands} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class RolexService {

  constructor(private http: HttpClient) { }

  getRolex(): Observable<Brands[]>{
   return this.http.get<Brands[]>('http://localhost:3000/rolex');
  }
}
