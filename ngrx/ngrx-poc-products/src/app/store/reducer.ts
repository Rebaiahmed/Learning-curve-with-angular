import { createReducer, on, Action } from '@ngrx/store';
import { Product } from '../models/product';
import { CreateProductAction } from './actions/card.action';
import ProductState, { initializeState } from './app.state';



export const intialState = initializeState();

/* on(ToDoActions.CreateToDoAction, (state: ToDoState, todo: ToDo) => {
  return { ...state, ToDos: [...state.ToDos, todo], ToDoError: null };
}), */

const reducer = createReducer(
  intialState,
 /*  on(CreateProductction, (state: ProductState,product: Product) => {
    //return Object.assign({state, Products: Object.assign(state.products, product), ProductError: null });
    return { ...state, products: [...state.products, product], ToDoError: null };
  }) */

  on(CreateProductAction, (state: ProductState, product: Product) => {
    return { ...state, products: [...state.products, product], ToDoError: null };
  }),
  )


  export function ProductReducer(state: ProductState | undefined, action: Action) {
    return reducer(state, action);
  }
