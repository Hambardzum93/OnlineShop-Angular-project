import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brands} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ChanelService {

  constructor(private http: HttpClient) { }
  getChanel(): Observable<Brands[]>{
    return this.http.get<Brands[]>('http://localhost:3000/chanel');
  }
}
