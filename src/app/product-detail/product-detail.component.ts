import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsService],
})
export class ProductDetailComponent implements OnInit {
  public product: any;
  public productId: number;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private _cartshop: CartService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { this.productId = params['productId']; });
    this.productService.getProductById(this.productId).subscribe((response) => {this.product = response ;  console.log(this.product); });
  }
addToCart(product) {
this._cartshop.addToCart(product);
console.log('push push');
}
}
