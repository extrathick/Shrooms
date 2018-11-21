/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/logo.svg'; //Import components/Images from folders like this
import './App.css';
import SunburstController from './components/SunburstController';
import GenericBarChart from './components/GenericBarChart';
import GenericClusteredBarChart from './components/GenericClusteredBarChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <SunburstController />
          <GenericBarChart title='Class' category='class' colors='default' />
          <GenericBarChart title='Cap Color' category='cap-color' colors='default' />
          <GenericBarChart title='Gill Color' category='gill-color' colors='default' />
          <GenericBarChart title='Stalk Color Above Ring' category='stalk-color-above-ring' colors='default' />
          <GenericBarChart title='Stalk Color Below Ring' category='stalk-color-below-ring' colors='default' />
          <GenericBarChart title='Veil Color' category='veil-color' colors='default' />
          <GenericBarChart title='Spore Print Color' category='spore-print-color' colors='default' />
          <GenericBarChart title='Population' category='population' colors='default' />
          <GenericClusteredBarChart title='Odor vs Class' category='odor' category2='class' colors='default' />
          <GenericClusteredBarChart title='Odor vs Population' category='odor' category2='population' colors='default' />
        </header>
      </div>
    );
  }
}

export default App; //For each component you make, you'll need to export it.
