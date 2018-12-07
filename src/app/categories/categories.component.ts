import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories/categories.service';
import { products } from '../models/products';
import { ProductsService } from '../services/products.service';
import { element } from '../../../node_modules/protractor';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories = [];
  private checked: boolean;
  constructor(private categoriesService: CategoriesService, private productService: ProductsService) {
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories = data.json();
    });
  }

  getCategories(): any[] {
    return this.categories;
  }

  filterCategories(category) {
    console.log(this.checked);
    if (this.checked) {
      this.productService.getProduct().subscribe(data => {
        const p = [];
        p.fill(data);

        products.push(p.filter(pr => pr.categoryDTO.id === category.id));
        console.log(products[0]);
      });
    }
  }
}
