import React from 'react';

import Bytes from './components/bytes/bytes.component';
import Octal from './components/octal/octal.component';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Bytes />
      <Octal />
    </div>
  );
}

export default App;
