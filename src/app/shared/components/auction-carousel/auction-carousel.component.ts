import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product-service';
import {first} from 'rxjs/operators';
import {AlertService} from '../../../services/alert-service';

@Component({
  selector: 'app-auction-carousel',
  templateUrl: './auction-carousel.component.html',
  styleUrls: ['./auction-carousel.component.css']
})
export class AuctionCarouselComponent implements OnInit {

  images: string[];

  constructor(private productService: ProductService, private alertService: AlertService) {
  }

  ngOnInit() {
    this.productService.getAny3ProductsImages().pipe(first())
      .subscribe(
        data => {
          this.images = data;
        },
        error => {
          this.alertService.error(error.error.message, true);
        });
  }
}
