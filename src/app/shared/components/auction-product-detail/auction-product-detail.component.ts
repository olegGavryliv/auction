import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-auction-product-detail',
  templateUrl: './auction-product-detail.component.html',
  styleUrls: ['./auction-product-detail.component.css']
})
export class AuctionProductDetailComponent {
  productTitle: string;

  constructor(route: ActivatedRoute) {
    this.productTitle = route.snapshot.params['prodTitle'.toString()];
  }
}
