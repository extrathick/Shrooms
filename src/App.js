/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/logo.svg'; //Import components/Images from folders like this
import './App.css';
import TestComponent from './components/test'
import SunburstController from './components/SunburstController'
import TryingHard from './components/mushStackChart'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <TestComponent />
          <SunburstController />
          <TryingHard />
        </header>
      </div>
    );
  }
}

export default App; //For each component you make, you'll need to export it.
