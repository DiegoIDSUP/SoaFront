import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangoService {
  url: string;
  constructor(public _http: HttpClient) {
    this.url = "http://127.0.0.1:8000/app/productos/";
  }
  get(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.get(this.url, {headers: headers});
	}
  add(producto): Observable<any>{
    let params = JSON.stringify(producto);
		let headers = new HttpHeaders().set('Content-Type','application/json');
		return this._http.post(this.url , params, {headers: headers});
  }
}