import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToyService {

  constructor(private http:HttpClient) { }

  _url = '.\assets\data\toys.json';

  getData(){
    this.http.get<any>(this._url);
  }
}
