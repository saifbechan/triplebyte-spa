import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';

import Bytes from './bytes.component';

const mockStore = configureStore([]);

let store;

beforeEach(() => {
  store = mockStore({ bytes: { values: [0, 0, 0, 1, 0, 0, 1, 1, 0, 1] } });
});

afterEach(cleanup);

it('renders correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <Bytes />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
