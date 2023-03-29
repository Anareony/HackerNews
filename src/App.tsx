import React from 'react';
import List from './components/list';
import dataStore from './store/store';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List number={dataStore}/>
      </header>
    </div>
  );
}

export default App;
