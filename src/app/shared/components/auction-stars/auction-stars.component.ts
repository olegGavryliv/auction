import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-auction-stars',
  templateUrl: './auction-stars.component.html',
  styleUrls: ['./auction-stars.component.css']
})
export class AuctionStarsComponent implements OnInit {
  @Input() count = 5; // <1>
  @Input() rating = 0; // <2>
  stars: boolean[] = []; // <3>

  ngOnInit() { // <4>
    for (let i = 1; i <= this.count; i++) {
      this.stars.push(i > this.rating);
    }
  }
}
