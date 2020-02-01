import BytesActionTypes from './bytes.types';
import bytesReducer from './bytes.reducer';

const INITIAL_STATE = {
  values: new Array(24).fill(0)
};

it('returns the initial state correctly', () => {
  expect(bytesReducer(undefined, { type: null })).toEqual(INITIAL_STATE);
});

it('returns the supplied state correctly', () => {
  const state = { a: 1 };
  expect(bytesReducer(state, { type: null })).toEqual(state);
});

it('toggles a byte from 0 to 1 and back in an array', () => {
  expect(
    bytesReducer(
      { values: [0, 1] },
      { payload: 0, type: BytesActionTypes.TOGGLE_BYTE }
    )
  ).toEqual({ values: [1, 1] });

  expect(
    bytesReducer(
      { values: [1, 1] },
      { payload: 0, type: BytesActionTypes.TOGGLE_BYTE }
    )
  ).toEqual({ values: [0, 1] });
});
