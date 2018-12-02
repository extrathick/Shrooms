/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/shroom.png'; //Import components/Images from folders like this
import './App.css';
import SunburstController from './components/SunburstController';
//import ChartSummary from './components/ChartSummary';
//import GenericBarChart from './components/GenericBarChart';
//import GenericClusteredBarChart from './components/GenericClusteredBarChart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{marginBottom: '30vh'}}>
            <SunburstController />
          </div>
          {/* <GenericBarChart title='default' category='class' colors='default' />
          <ChartSummary category='class' category2='none' text='default' />
          <GenericBarChart title='default' category='cap-color' colors='default' />
          <ChartSummary category='cap-color' category2='none' text='default' />
          <GenericBarChart title='default' category='gill-color' colors='default' />
          <GenericBarChart title='default' category='stalk-color-above-ring' colors='default' />
          <GenericBarChart title='default' category='stalk-color-below-ring' colors='default' />
          <GenericBarChart title='default' category='veil-color' colors='default' />
          <GenericBarChart title='default' category='spore-print-color' colors='default' />
          <GenericBarChart title='default' category='population' colors='default' />
          <GenericClusteredBarChart title='default' category='odor' category2='class' colors='default' />
          <GenericClusteredBarChart title='default' category='odor' category2='population' colors='default' />
          <ChartSummary category='odor' category2='population' text='default' /> */}
        </header>
      </div>
    );
  }
}

export default App; //For each component you make, you'll need to export it.
