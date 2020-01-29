import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Byte, { Byte as BytePure } from './byte.component.jsx';

import { toggleByte } from '../../redux/bytes/bytes.actions';

const mockStore = configureStore([]);

let store;

beforeEach(() => {
  store = mockStore({
    myState: 'mystate'
  });

  store.dispatch = jest.fn();
});

it('renders children correctly', () => {
  const { getByText } = render(<BytePure>9</BytePure>);
  const linkElement = getByText(/9/i);
  expect(linkElement).toBeInTheDocument();
});

it('calls correct function on click', () => {
  const toggleByte = jest.fn();
  const { getByText } = render(
    <BytePure idx={5} toggleByte={toggleByte}>
      22
    </BytePure>
  );
  fireEvent.click(getByText(/22/i));
  expect(toggleByte).toHaveBeenCalledWith(5);
});

it('calls dispatch correctly on click', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Byte idx={5}>22</Byte>
    </Provider>
  );
  fireEvent.click(getByText(/22/i));
  expect(store.dispatch).toHaveBeenCalledWith(toggleByte(5));
});
