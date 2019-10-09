import {Component} from '@angular/core';
import {Search} from '../../../services/search-service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product-service';
import {positiveNumberValidator} from '../../../validator/validators';

@Component({
  selector: 'app-auction-search',
  templateUrl: './auction-search.component.html',
  styleUrls: ['./auction-search.component.css']
})
export class AuctionSearchComponent {

  formModel: FormGroup;
  categories: string[];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getAllCategories();

    const fb = new FormBuilder();
    this.formModel = fb.group({
      title: [null, Validators.minLength(3)],
      price: [null, positiveNumberValidator],
      category: [-1]
    });
  }

  onSearch() {
    console.log(this.formModel.valid);
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  getSearchFormParam(): Search {
    return this.formModel.value;
  }

}
