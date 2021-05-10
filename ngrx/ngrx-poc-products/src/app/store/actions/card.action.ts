import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product';

export const CreateProductAction = createAction(
  '[Product] - Create Peoduct',
  props<Product>()
);

export const removeProduct = createAction(
  '[Book List] Remove product',
  props<{ product: Product }>()
);
