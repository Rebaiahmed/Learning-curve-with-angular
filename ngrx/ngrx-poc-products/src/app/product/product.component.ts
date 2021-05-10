import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Product } from '../models/product';
import { CreateProductAction } from '../store/actions/card.action';
import { PRODUCTS } from '../store/market';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  product:Product

  constructor(private route: ActivatedRoute,
    private store: Store) { }

  ngOnInit(): void {
    this.route.params.subscribe((p)=>{
      let id = p['id']
      let result = Array.prototype.filter.call(PRODUCTS,(v)=>v.id == id)
      if (result.length > 0) {
        this.product = result[0]
      }
  })
  }

  addToCart(product: Product) {
    this.store.dispatch(CreateProductAction( product ));
}

}
