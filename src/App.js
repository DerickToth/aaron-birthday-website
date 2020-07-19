import React from 'react';
import './App.css';
import { CardCollection } from './CardCollection';
import { Audio } from './Audio';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>AARON DAY!</p>
        </header>
        <Audio/>
        <CardCollection/>
      </div>
    );
  }
}

export default App;
