import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './models/product';
import ProductState from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-poc-products';
  products$:  Observable<ProductState>;
  productSubscription: Subscription;
  productsLenght = 0;

  constructor(private store:  Store<{ products: ProductState }>) {
    this.products$ = store.pipe(select('products'));
  }
  ngOnInit() {
    this.productSubscription = this.products$
    .pipe(
      map(x => {
       console.log('x',x);
       this.productsLenght= x.products.length;
      })
    )
    .subscribe();

  }
}
