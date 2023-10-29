import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductServicesComponent } from './product-services/product-services.component';
import { ShowcaseproductsComponent } from './showcaseproducts/showcaseproducts.component';
import { FeaturedProductComponent } from './featured-product/featured-product.component';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { DealsProductComponent } from './deals-product/deals-product.component';
import { FresharivalProductComponent } from './fresharival-product/fresharival-product.component';
import { SingleOffersComponent } from './single-offers/single-offers.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { OurBrandComponent } from './our-brand/our-brand.component';
import { FooterUpperComponent } from './footer-upper/footer-upper.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductServicesComponent,
    ShowcaseproductsComponent,
    FeaturedProductComponent,
    BannerSectionComponent,
    DealsProductComponent,
    FresharivalProductComponent,
    SingleOffersComponent,
    NewsletterComponent,
    OurBrandComponent,
    FooterUpperComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
