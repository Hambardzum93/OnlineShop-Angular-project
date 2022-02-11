import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Time} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AwiService {

  constructor(private http: HttpClient) { }

  getAwi(): Observable<Time[]> {
    return this.http.get<Time[]>('http://localhost:3000/awi');
  }
}
