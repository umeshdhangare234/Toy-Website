import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  constructor(private http:HttpClient) { }

  _url = '\assets\data\toys.json';

  getData():Observable<any>{
   return this.http.get<any>(this._url);
  }
}
