import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const loadCustomers = createAction(
  '[Customer] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[Customer] Load Customers Success',
  props<{ data: any }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] Load Customers Failure',
  props<{ error: any }>()
);

export const addCustomer = createAction(
  '[Customer] Add customer',
  (customer: Customer) => ({customer})
)
