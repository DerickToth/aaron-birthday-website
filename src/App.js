import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    var memeSrc = "https://i.pinimg.com/originals/22/27/c0/2227c0567796bde1273dc37874ebcea2.png";
    return (
      <div className="App">
        <header className="App-header">
          <p>IT'S AARON DAY!!!</p>
          <img className="meme" src={memeSrc} />
        </header>
      </div>
    );
  }
}

export default App;
