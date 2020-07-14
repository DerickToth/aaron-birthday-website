import React from 'react';
import './App.css';
import { ImageCollection } from './ImageCollection';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>AARON DAY!</p>
        </header>
        <ImageCollection/>
      </div>
    );
  }
}

export default App;
