import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { products } from '../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(data => {
      // products.fill(data);
      products.push(data);
      console.log(products[0]);
    });
  }

  getProducts() {
    return products[0];
  }


}
