import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tobuy } from '../_interface/tobuy';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = 'http://localhost:8080';

  constructor(
    private _http: HttpClient
  ) { }

  public getToBuy(): Observable<Tobuy[]>
  {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };
    return this._http.get<Tobuy[]>(`${this.serverUrl}/getShoppingList`);
  }

  public postToBuy(object: Tobuy): Observable<Tobuy>
  {
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };
    return this._http.post<Tobuy>(`${this.serverUrl}/addShoppingListEntry/${object.article}`,object);
  }

}
