import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  // private _url: string = '/assets/data/categories.json';
  private _url: string = 'http://localhost:3000/api/categories';
  constructor(private http: HttpClient) { }

  getCategories() {
    // return this.http.get(this._url);
    return this.http.get(this._url);
  }
}
