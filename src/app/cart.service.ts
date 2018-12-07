import { Injectable } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  Carts: Product [] = [];

  constructor() { }
  addToCart(product) {
    this.Carts.push(product);
    console.log(product);
      }
}
