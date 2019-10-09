
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
import {AuctionProductDetailComponent} from './shared/components/auction-product-detail/auction-product-detail.component';
import {AuctionHomeComponent} from './shared/components/auction-home/auction-home.component';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import {LoginGuard} from './routsactivators/login-guard';
import {UnsavedChangesGuard} from './routsactivators/usaved-changes-guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './shared/components/login/login.component';
import {FilterPipe} from './pipes/filter-pipe';


const appRoutes: Routes = [
  { path: '', component: AuctionHomeComponent,  canDeactivate : [UnsavedChangesGuard] },
  { path: 'login', component: LoginComponent , canDeactivate : [UnsavedChangesGuard]},
  { path: 'products', component: AuctionHomeComponent },
  { path: 'products/:productId', component: AuctionProductDetailComponent, canActivate : [LoginGuard]},
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    AuctionCarouselComponent,
    AuctionFooterComponent,
    AuctionNavbarComponent,
    AuctionSearchComponent,
    AuctionStarsComponent,
    AuctionStarsComponent,
    AuctionProductItemComponent,
    AuctionProductDetailComponent,
    AuctionHomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes), // for routing
    FormsModule, // if you want to use [(ngModel)] then you have to import FormsModule in app.module.ts
    ReactiveFormsModule // to use reactive forms
  ],
  providers: [ProductService,  LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
