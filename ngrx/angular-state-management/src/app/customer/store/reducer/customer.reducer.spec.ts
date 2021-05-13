import { customerReducer, initialState } from './customer.reducer';

describe('Customer Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = customerReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
