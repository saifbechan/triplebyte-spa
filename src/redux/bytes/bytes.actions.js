import BytesActionTypes from './bytes.types';

// eslint-disable-next-line import/prefer-default-export
export const toggleByte = idx => ({
  type: BytesActionTypes.TOGGLE_BYTE,
  payload: idx
});
