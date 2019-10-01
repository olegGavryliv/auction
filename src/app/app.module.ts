import bootstrap from "bootstrap";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuctionCarouselComponent} from './shared/components/auction-carousel/auction-carousel.component';
import {AuctionFooterComponent} from './shared/components/auction-footer/auction-footer.component';
import {AuctionNavbarComponent} from './shared/components/auction-navbar/auction-navbar.component';
import {AuctionSearchComponent} from './shared/components/auction-search/auction-search.component';
import {ProductService} from './services/product-service';
import { AuctionStarsComponent } from './shared/components/auction-stars/auction-stars.component';
import { AuctionProductItemComponent } from './shared/components/auction-product-item/auction-product-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AuctionCarouselComponent,
    AuctionFooterComponent,
    AuctionNavbarComponent,
    AuctionSearchComponent,
    AuctionStarsComponent,
    AuctionStarsComponent,
    AuctionProductItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
