import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(product => {
      this.products = product;
      console.log(this.products);
    });
  }



}
