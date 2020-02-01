import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('./components/bytes/bytes.component', () => 'div');
jest.mock('./components/octal/octal.component', () => 'div');

it('should render correctly', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
