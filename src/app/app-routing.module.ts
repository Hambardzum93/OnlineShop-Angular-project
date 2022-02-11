import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutPageComponent} from './pages/about-page/about-page.component';
import {ContactPageComponent} from './pages/contact-page/contact-page.component';
import {TimexPageComponent} from './pages/timex-page/timex-page.component';
import {CasioPageComponent} from './pages/casio-page/casio-page.component';
import {HublotPageComponent} from './pages/hublot-page/hublot-page.component';
import {AwiPageComponent} from './pages/awi-page/awi-page.component';
import {DetailPageComponent} from './pages/detail-page/detail-page.component';
import {JewelleryPageComponent} from './pages/jewellery-page/jewellery-page.component';
import {ArmaniComponent} from './pages/armani/armani.component';
import {SvarovskiComponent} from './pages/svarovski/svarovski.component';
import {CartierComponent} from './pages/cartier/cartier.component';
import {LouisVuittonComponent} from './pages/louis-vuitton/louis-vuitton.component';
import {DetailJewelleryPagesComponent} from './pages/detail-jewellery-pages/detail-jewellery-pages.component';
import {BrandsComponent} from './pages/brands/brands.component';
import {RolexComponent} from './pages/rolex/rolex.component';
import {ChanelComponent} from './pages/chanel/chanel.component';
import {BlancpainComponent} from './pages/blancpain/blancpain.component';
import {LonginesComponent} from './pages/longines/longines.component';
import {ErrorPagesComponent} from './shared/error-pages/error-pages.component';
import {BlancpaindetailComponent} from './pages/blancpaindetail/blancpaindetail.component';
import {LonginesdetailComponent} from './pages/longinesdetail/longinesdetail.component';
import {ChaneldetailComponent} from './pages/chaneldetail/chaneldetail.component';
import {RolexdetailComponent} from './pages/rolexdetail/rolexdetail.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {SearchPageComponent} from './shared/search-page/search-page.component';
import {AuthGuard} from './shared/classes/auth.guard';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: 'timex', component: TimexPageComponent},
  {path: 'casio', component: CasioPageComponent},
  {path: 'hublot', component: HublotPageComponent},
  {path: 'awi', component: AwiPageComponent},
  {path: 'detail/:id', component: DetailPageComponent},
  {path: 'jewellery', component: JewelleryPageComponent},
  {path: 'armani', component: ArmaniComponent},
  {path: 'svarovski', component: SvarovskiComponent},
  {path: 'cartier', component: CartierComponent},
  {path: 'louisVuitton', component: LouisVuittonComponent},
  {path: 'detailJewellery/:id', component: DetailJewelleryPagesComponent},
  {path: 'brands', component: BrandsComponent,  canActivate: [AuthGuard]},

  {path: 'rolex', component: RolexComponent , children: [
      {path: ':id', component: RolexdetailComponent}
    ]},
  {path: 'chanel', component: ChanelComponent , children: [
      {path: ':id', component: ChaneldetailComponent}
    ]},
  {path: 'blancpain', component: BlancpainComponent , children: [
      {path: ':id', component: BlancpaindetailComponent}
    ]},
  {path: 'longines', component: LonginesComponent , children: [
      {path: ':id', component: LonginesdetailComponent}
    ]},
  {path: 'login', component: LoginPageComponent},
  {path: 'search', component: SearchPageComponent},

  {path: 'error', component: ErrorPagesComponent},
  {path: '**', redirectTo: 'error'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

