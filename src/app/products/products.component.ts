import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(prod: ProductService) {
    prod.getProducts().subscribe((prods: Product[]) => {
        this.products = prods;
    });
  }

  ngOnInit() {
  }
}
