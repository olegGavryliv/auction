import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {ProductService} from '../../../services/product-service';
import {AlertService} from '../../../services/alert-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auction-add-product',
  templateUrl: './auction-add-product.component.html',
  styleUrls: ['./auction-add-product.component.css']
})
export class AuctionAddProductComponent implements OnInit {

  productForm: FormGroup;

  error: any;
  errors: string[];


  constructor(private formBuilder: FormBuilder, private productService: ProductService, private alertService: AlertService, private router: Router) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['Tv2', Validators.required],
      description: ['Tv watch', Validators.required],
      price: ['999', Validators.required]
    });
    this.errors = [];
  }

  get f() {
    return this.productForm.controls;
  }


  onSubmit() {

    this.errors = [];

    this.productService.addProduct(this.f.name.value, this.f.description.value, this.f.price.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Product was added successfully', true);
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error.error.message, true);
          if (error.status === 400) {
            error.error.details.forEach(obj => {
              this.errors.push(obj.messages);
            });
          }
        });
  }

}
