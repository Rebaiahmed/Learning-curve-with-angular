import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { ProductReducer} from './store/reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    StoreModule.forRoot({ products: ProductReducer}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
