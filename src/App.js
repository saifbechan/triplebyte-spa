import React from 'react';

import Bytes from './components/bytes/bytes.component';
import Octal from './components/octal/octal.component';

import { AppContainer } from './App.styles';

const App = () => (
  <AppContainer>
    <Bytes />
    <Octal />
  </AppContainer>
);

export default App;
