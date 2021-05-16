import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

export const COUNTER_STATE_NAME = 'counter';

export const selectCounter =
  createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCount = createSelector(
  selectCounter,
  (state: CounterState) => state.counter
);
