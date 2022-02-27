import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { SuccessComponent } from './component/success/success.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './component/model/model.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,

    CartComponent,
    HeaderComponent,
    SuccessComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
