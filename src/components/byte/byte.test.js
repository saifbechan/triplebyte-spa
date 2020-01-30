import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Byte from './byte.component';

const mockStore = configureStore([]);

let store;
let renderedByte;

const byteValue = 1;
const idx = 5;
const toggleByte = jest.fn();

beforeEach(() => {
  store = mockStore({
    myState: 'mystate'
  });

  store.dispatch = jest.fn();

  renderedByte = render(
    <Provider store={store}>
      <Byte idx={idx} toggleByte={toggleByte}>
        {byteValue}
      </Byte>
    </Provider>
  );
});

it('renders children correctly', () => {
  const { asFragment } = renderedByte;
  expect(asFragment()).toMatchSnapshot();
});

it('calls dispatch correctly on click', () => {
  const { getByText } = renderedByte;
  fireEvent.click(getByText(new RegExp(byteValue, 'i')));
  expect(store.dispatch).toHaveBeenCalledWith({
    payload: idx,
    type: 'TOGGLE_BYTE'
  });
});
