import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { CartService } from '../cart.service';
import { MainNavComponent } from '../main-nav/main-nav.component';
import { CartInfo } from '../models/shared.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  providers: [ProductsService],
})
export class ProductDetailComponent implements OnInit {
  public product: any;
  public productId: number;
  @Input() mainNav: MainNavComponent;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductsService, private _cartshop: CartService,
    private ref: ChangeDetectorRef, private cartInfo: CartInfo) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => { this.productId = params['productId']; });
    this.productService.getProductById(this.productId).subscribe((response) => { this.product = response; console.log(this.product); });
  }
  addToCart(product) {
    this.cartInfo.addCartElement();
    this.ref.detectChanges();

    this._cartshop.addToCart(product);
  }
}
