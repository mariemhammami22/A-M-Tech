import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get('http://localhost:8080/api/products');
   }

   postProduct(commande: object) {
    return this.http.post('http://localhost:8080/api/products', commande);
   }

   getProductById(id) {
    return this.http.get('http://localhost:8080/api/product/' + id );
   }

}
