import {Component} from '@angular/core';
import {Search} from '../../../services/search-service';

@Component({
  selector: 'app-auction-search',
  templateUrl: './auction-search.component.html',
  styleUrls: ['./auction-search.component.css']
})
export class AuctionSearchComponent {

  private search = new Search('', 0);

  getSearchFormParam(): Search {
    return this.search;
  }
}
