import BytesActionTypes from './bytes.types';

const INITIAL_STATE = {
  values: [0, 0, 0]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BytesActionTypes.TOGGLE_BYTE:
      return {
        ...state,
        values: state.values.map((value, idx) =>
          idx === action.payload ? (value ? 0 : 1) : value
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
