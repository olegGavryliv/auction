import {Component, Input} from '@angular/core';
import {ProductService} from '../../../services/product-service';

@Component({
  selector: 'app-auction-product-item',
  templateUrl: './auction-product-item.component.html',
  styleUrls: ['./auction-product-item.component.css']
})
export class AuctionProductItemComponent  {
  @Input() product: ProductService;

}

