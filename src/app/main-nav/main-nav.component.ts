import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartInfo } from '../models/shared.model';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  constructor(private cartInfo: CartInfo, private ref: ChangeDetectorRef) {

  }

  ngOnInit() {
  }

  getCartCount() {
    return this.cartInfo.getCartInfo();
  }

  detectChanges() {
    this.ref.detectChanges();
  }

}
