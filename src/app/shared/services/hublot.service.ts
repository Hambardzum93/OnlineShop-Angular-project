import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Time} from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class HublotService {

  constructor(private http: HttpClient) { }

  getHublot(): Observable<Time[]>{
    return this.http.get<Time[]>('http://localhost:3000/hublot');
  }
}
