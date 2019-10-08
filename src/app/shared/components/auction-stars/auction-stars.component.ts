import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-auction-stars',
  templateUrl: './auction-stars.component.html',
  styleUrls: ['./auction-stars.component.css']
})
export class AuctionStarsComponent {
  private ratinG: number;
  private stars: boolean[];
  private maxStars = 5;

  @Input()
  readonly = true;
  @Input()
  get rating(): number {
    return this.ratinG;
  }

  set rating(value: number) {
    this.ratinG = value || 0;
    this.stars = Array(this.maxStars).fill(true, 0, this.rating);
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index) {
    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }
}
