import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private productService: ProductsService ) { }

  ngOnInit() {
  }
  checkout() {
    console.log('checkout');
    this.productService.postProduct({
      'date': '2018-11-27T11:44:55.216Z',
      'email': 'string',
      'id': 0,
      'productsId': [
        0
      ],
      'reference': 'string',
      'statut': 'string'
    }).subscribe( res => console.log('res in'));
  }

}
