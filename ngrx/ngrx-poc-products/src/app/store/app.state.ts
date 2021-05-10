import { Product } from "../models/product";




export default class ProductState {
  products: Array<Product>;
  ProductError: Error;
}

export const initializeState = (): ProductState => {
  return { products: Array<Product>(), ProductError: null };
};
