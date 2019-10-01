import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../services/product-service';

@Component({
  selector: 'app-auction-product-item',
  templateUrl: './auction-product-item.component.html',
  styleUrls: ['./auction-product-item.component.css']
})
export class AuctionProductItemComponent  {
  @Input() product: Product;
}

