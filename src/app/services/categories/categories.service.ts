import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl = 'http://localhost:8080/api/';
  constructor(private http: Http) { }

  getCategories(): Observable<any> {
    const url: string = this.baseUrl + 'categories';
    return this.http.get(url);
  }

  getCategory(id: number): Observable<any> {
    const url: string = this.baseUrl + 'category/' + id;
    return this.http.get(url);
  }
}
