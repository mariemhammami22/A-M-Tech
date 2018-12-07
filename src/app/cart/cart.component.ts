import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { Product } from 'src/app/product';
import { cartProducts } from '../models/cartProducts';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductsService, private _cartshop: CartService) { }
  Carts: Product[] = [];
  private total = 0;
  ngOnInit() {
    this.Carts = cartProducts;
  }

  checkout() {
    this.productService.postProduct({
      'date': '2018-11-27T11:44:55.216Z',
      'email': 'string',
      'id': 0,
      'productsId': [
        0
      ],
      'reference': 'string',
      'statut': 'string'
    }).subscribe(res => console.log('res in'));
  }

  calculateCartTotal() {
    cartProducts.forEach(function (element) {
      this.total += element.prix;
    });
  }

  removeProduct(cart) {
    this.Carts.filter(c => c.id !== cart.id);
  }
}
