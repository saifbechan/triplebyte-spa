import BytesActionTypes from './bytes.types';

const INITIAL_STATE = {
  values: new Array(24).fill(0)
};

const toggleByte = value => (value ? 0 : 1);

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BytesActionTypes.TOGGLE_BYTE:
      return {
        ...state,
        values: state.values.map((value, idx) =>
          idx === action.payload ? toggleByte(value) : value
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
