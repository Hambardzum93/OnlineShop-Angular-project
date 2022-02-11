import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Jewellery} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SvarovskiService {

  constructor(private http: HttpClient) { }
  getSvarovski(): Observable<Jewellery[]> {
    return this.http.get<Jewellery[]>('http://localhost:3000/svarovski');
  }
}
