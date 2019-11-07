import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AuctionCarouselComponent} from './shared/components/auction-carousel/auction-carousel.component';
import {AuctionFooterComponent} from './shared/components/auction-footer/auction-footer.component';
import {AuctionNavbarComponent} from './shared/components/auction-navbar/auction-navbar.component';
import {AuctionSearchComponent} from './shared/components/auction-search/auction-search.component';
import {AuctionStarsComponent} from './shared/components/auction-stars/auction-stars.component';
import {AuctionProductItemComponent} from './shared/components/auction-product-item/auction-product-item.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuctionProductDetailComponent} from './shared/components/auction-product-detail/auction-product-detail.component';
import {AuctionHomeComponent} from './shared/components/auction-home/auction-home.component';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';
import {UnsavedChangesGuard} from './routs-activators/usaved-changes-guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './shared/components/login/login.component';
import {FilterPipe} from './pipes/filter-pipe';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProductService} from './services/product-service';
import {AuthenticationService} from './services/authentication.service';
import {AuctionAboutComponent} from './shared/components/auction-about/auction-about.component';
import {AuthGuard} from './routs-activators/auth-guard';
import {JwtInterceptor} from './routs-activators/jwt-interceptor';
import {ErrorInterceptor} from './routs-activators/error-interceptor';


const appRoutes: Routes = [
  {path: '', component: AuctionHomeComponent, canDeactivate: [UnsavedChangesGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'products', component: AuctionHomeComponent, canActivate: [AuthGuard]},
  {path: 'products/:productId', component: AuctionProductDetailComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AuctionAboutComponent, canActivate: [AuthGuard]},
  {path: '**', component: PageNotFoundComponent}
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
    FilterPipe,
    AuctionAboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes), // for routing
    FormsModule, // if you want to use [(ngModel)] then you have to import FormsModule in app.module.ts
    ReactiveFormsModule, // to use reactive forms
    HttpClientModule // for http requests
  ],
  providers: [ProductService, UnsavedChangesGuard, AuthenticationService, AuthGuard,

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
