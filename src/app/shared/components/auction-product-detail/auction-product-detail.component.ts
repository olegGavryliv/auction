import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../services/product-service';
import {Product, Review} from '../../../model/product';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../services/alert-service';


@Component({
  selector: 'app-auction-product-detail',
  templateUrl: './auction-product-detail.component.html',
  styleUrls: ['./auction-product-detail.component.css']
})
export class AuctionProductDetailComponent implements OnInit {
  product: Product;
  reviews: Review[];
  
  newComment: string;
  newRating: number;

  isReviewHidden = true;

  constructor(private route: ActivatedRoute, private productService: ProductService, private alertService: AlertService) {

  }

  ngOnInit() {
    const prodId: number = parseInt(this.route.snapshot.params['productId'], 10);
    this.productService.getProductById(prodId)
      .pipe(first())
      .subscribe(
        data => {
          this.product = data;
          this.reviews = data['reviews'];
        },
        error => {
          this.alertService.error(error.error.message, true);
        });
  }


  addReview() {
    const review = new Review();

    review.comment = this.newComment;
    review.productId = this.product.id;
    review.rating = this.newRating;

    this.productService.addReviewRequest(review).pipe(first())
      .subscribe(
        data => {
          this.reviews = [...this.reviews, data];
          this.product.rating = this.averageRating(this.reviews);
          this.resetForm();
        },
        error => {
          this.alertService.error(error.error.message, true);
        });
  }

  averageRating(reviews: Review[]) {
    const sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }

  resetForm() {
    this.newRating = 0;
    this.newComment = null;
    this.isReviewHidden = true;
  }



}

