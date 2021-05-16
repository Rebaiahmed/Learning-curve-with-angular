import { Action, createReducer, on, State } from '@ngrx/store';
import { CounterState, initialState } from './counter.state';
import * as CounterActions from './counter.actions';

const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return {
      ...state,
      counter: state.counter + 2,
    };
  }),
  on(CounterActions.decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 2,
    };
  }),
  on(CounterActions.reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export function reducer(state: CounterState | undefined, action: Action) {
  return counterReducer(state, action);
}
