import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Time} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TimexService {

  constructor(private http: HttpClient) { }

  getTimex(): Observable<Time[]> {
    return this.http.get<Time[]>('http://localhost:3000/timex');
  }
}
