import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {first} from 'rxjs/operators';
import {CanComponentDeactivate} from '../../../routs-activators/usaved-changes-guard';
import {Observable} from 'rxjs';
import {AuctionSearchComponent} from '../auction-search/auction-search.component';
import {ProductService} from '../../../services/product-service';
import {Product} from '../../../model/product';
import {AlertService} from '../../../services/alert-service';


@Component({
  selector: 'app-auction-home',
  templateUrl: './auction-home.component.html',
  styleUrls: ['./auction-home.component.css']
})
export class AuctionHomeComponent implements CanComponentDeactivate, OnInit {

  @ViewChild('childSearch')
  firstChild: AuctionSearchComponent;

  products: Product [] = [];
  titleFilter: FormControl = new FormControl();
  filterCriteria: string;

  constructor(private productService: ProductService, private alertService: AlertService) {

  }


  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const title = this.firstChild.getSearchFormParam().title;
    const price = this.firstChild.getSearchFormParam().price;
    if (title != null && title.length > 0 || price != null && price.valueOf() > 0) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }

  ngOnInit() {
    this.productService.getProducts()
      .pipe(first())
      .subscribe(
        data => {
          this.products = data;
        },
        error => {
          this.alertService.error(error.error.message, true);

        });
  }

}
