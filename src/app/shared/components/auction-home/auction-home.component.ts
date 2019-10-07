import {Component, ViewChild} from '@angular/core';
import {Product, ProductService} from '../../../services/product-service';
import {FormControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {CanComponentDeactivate} from '../../../routsactivators/usaved-changes-guard';
import {Observable} from 'rxjs';
import {AuctionSearchComponent} from '../auction-search/auction-search.component';


@Component({
  selector: 'app-auction-home',
  templateUrl: './auction-home.component.html',
  styleUrls: ['./auction-home.component.css']
})
export class AuctionHomeComponent implements CanComponentDeactivate {

  @ViewChild('childSearch')
  firstChild: AuctionSearchComponent;

  products: Product[] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
    this.titleFilter.valueChanges.pipe(
      debounceTime(100))
      .subscribe(
        value => this.filterCriteria = value,
        error => console.error(error));
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.firstChild.getSearchFormParam().title.length > 0 ||
      this.firstChild.getSearchFormParam().price.valueOf() > 0)) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }

}
