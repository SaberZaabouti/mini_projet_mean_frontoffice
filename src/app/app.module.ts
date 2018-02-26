import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // sing angular 4.3

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductFilterPipe } from './filters/product.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { StarComponent } from './components/shared/star/star.component';
import { ProductService } from './services/product.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { HttpModule } from '@angular/http';
import { ProductDetailGuard } from './services/product-guard.service';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
   { path: 'welcome',  component: WelcomeComponent },
   { path: 'list',  component: ProductListComponent },
   { path: 'add',  component: ProductAddComponent },
   { path: 'product/:id',
            // canActivate: [ ProductDetailGuard ],
            component: ProductDetailComponent },
   { path: '', redirectTo: 'welcome', pathMatch: 'full' },
   { path: 'not-found', component: NotfoundComponent },
   { path: '**', redirectTo: 'not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipe,
    ProductListComponent,
    StarComponent,
    NavbarComponent,
    FooterComponent,
    WelcomeComponent,
    NotfoundComponent,
    ProductAddComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
