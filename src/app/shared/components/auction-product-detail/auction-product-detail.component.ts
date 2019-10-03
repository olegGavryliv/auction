import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService, Review} from '../../../services/product-service';

@Component({
  selector: 'app-auction-product-detail',
  templateUrl: './auction-product-detail.component.html',
  styleUrls: ['./auction-product-detail.component.css']
})
export class AuctionProductDetailComponent {
  product: Product;
  reviews: Review[];
  constructor(route: ActivatedRoute, productService: ProductService) {
    const prodId: number =  parseInt(route.snapshot.params['productId'], 10);
    this.product = productService.getProductById(prodId);
    this.reviews = productService.getReviewsForProduct(this.product.id);
  }
}

