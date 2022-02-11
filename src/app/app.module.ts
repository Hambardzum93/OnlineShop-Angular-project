import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TimexPageComponent } from './pages/timex-page/timex-page.component';
import { CasioPageComponent } from './pages/casio-page/casio-page.component';
import { HublotPageComponent } from './pages/hublot-page/hublot-page.component';
import { AwiPageComponent } from './pages/awi-page/awi-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { JewelleryPageComponent } from './pages/jewellery-page/jewellery-page.component';
import { ArmaniComponent } from './pages/armani/armani.component';
import { CartierComponent } from './pages/cartier/cartier.component';
import { LouisVuittonComponent } from './pages/louis-vuitton/louis-vuitton.component';
import { SvarovskiComponent } from './pages/svarovski/svarovski.component';
import { DetailJewelleryPagesComponent } from './pages/detail-jewellery-pages/detail-jewellery-pages.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { RolexComponent } from './pages/rolex/rolex.component';
import { ChanelComponent } from './pages/chanel/chanel.component';
import { BlancpainComponent } from './pages/blancpain/blancpain.component';
import { LonginesComponent } from './pages/longines/longines.component';
import { RolexdetailComponent } from './pages/rolexdetail/rolexdetail.component';
import { ChaneldetailComponent } from './pages/chaneldetail/chaneldetail.component';
import { LonginesdetailComponent } from './pages/longinesdetail/longinesdetail.component';
import { BlancpaindetailComponent } from './pages/blancpaindetail/blancpaindetail.component';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SearchPageComponent } from './shared/search-page/search-page.component';
import { TimexFilterPipe } from './shared/pipes/timex-filter.pipe';
import { AwiFilterPipe } from './shared/pipes/awi-filter.pipe';
import { CasioFilterPipe } from './shared/pipes/casio-filter.pipe';
import { HublotFilterPipe } from './shared/pipes/hublot-filter.pipe';
import { SvarovskiFilterPipe } from './shared/pipes/svarovski-filter.pipe';
import { ArmaniFilterPipe } from './shared/pipes/armani-filter.pipe';
import { LouisVuittonFilterPipe } from './shared/pipes/louis-vuitton-filter.pipe';
import { CartierFilterPipe } from './shared/pipes/cartier-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    TimexPageComponent,
    CasioPageComponent,
    HublotPageComponent,
    AwiPageComponent,
    DetailPageComponent,
    JewelleryPageComponent,
    ArmaniComponent,
    CartierComponent,
    LouisVuittonComponent,
    SvarovskiComponent,
    DetailJewelleryPagesComponent,
    BrandsComponent,
    RolexComponent,
    ChanelComponent,
    BlancpainComponent,
    LonginesComponent,
    RolexdetailComponent,
    ChaneldetailComponent,
    LonginesdetailComponent,
    BlancpaindetailComponent,
    ErrorPagesComponent,
    LoginPageComponent,
    SearchPageComponent,
    TimexFilterPipe,
    AwiFilterPipe,
    CasioFilterPipe,
    HublotFilterPipe,
    SvarovskiFilterPipe,
    ArmaniFilterPipe,
    LouisVuittonFilterPipe,
    CartierFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
