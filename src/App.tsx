import React from 'react';

import './App.css';
import BoxPlayground from './boxPlayground';

const App = () => {
  return (
    <div className="app">
      <BoxPlayground />
      <div>trigger change</div>
    </div>
  );
};

export default App;
