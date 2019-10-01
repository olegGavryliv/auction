import { Component } from '@angular/core';

@Component({
  selector: 'app-auction-carousel',
  templateUrl: './auction-carousel.component.html',
  styleUrls: ['./auction-carousel.component.css']
})
export class AuctionCarouselComponent  {
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
}
