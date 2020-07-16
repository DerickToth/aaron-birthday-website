import React from 'react';
import './App.css';
import { CardCollection } from './CardCollection';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>AARON DAY!</p>
        </header>
        <CardCollection/>
      </div>
    );
  }
}

export default App;
