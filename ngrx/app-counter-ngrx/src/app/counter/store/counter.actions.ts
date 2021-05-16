import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] increment');

export const decrement = createAction('[Counter] decrement');

export const reset = createAction('[Counter] reset');

export const incrementAction = createAction(
  '[Counter] Increment',
  props<{ count: number }>()
);
