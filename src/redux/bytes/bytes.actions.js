import BytesActionTypes from './bytes.types';

export const toggleByte = idx => ({
  type: BytesActionTypes.TOGGLE_BYTE,
  payload: idx
});
