import { Component } from '@angular/core';
import {Product, ProductService} from '../../../services/product-service';

@Component({
  selector: 'app-auction-home',
  templateUrl: './auction-home.component.html',
  styleUrls: ['./auction-home.component.css']
})
export class AuctionHomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();

    for (const product of  this.products ) {
      product.image = `https://picsum.photos/900/500?random&t=${Math.random()}`;
    }
  }
}
