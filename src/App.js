/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/shroom.png'; //Import components/Images from folders like this
import spacing from './pics/mushroom-gill-spacing.jpg';
import ring from './pics/mushroom-ring-type.jpg';
import './App.css';
import SunburstController from './components/SunburstController';
import ChartSummary from './components/ChartSummary';
//import GenericBarChart from './components/GenericBarChart';
import Calculator from './components/Calculator';
import GenericClusteredBarChart from './components/GenericClusteredBarChart';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{marginBottom: '15vh'}}>
        <Calculator />
            <SunburstController />
          </div>
          <div style={{ height: '90vh', width: '90vw', marginBottom: '15vh' }}>
            <GenericClusteredBarChart title='default' category='odor' category2='class' colors='default' />
            <ChartSummary category='odor' category2='class' text='default' />
          </div>
          <div style={{ height: '90vh', width: '90vw', marginBottom: '15vh' }}>
            <GenericClusteredBarChart title='default' category='class' category2='gill-color' colors='default' />
            <ChartSummary category='class' category2='gill-color' text='default' />
          </div>
          <div style={{ height: '90vh', width: '90vw', marginBottom: '40vh' }}>
            <img src={ring} />
            <GenericClusteredBarChart title='default' category='ring-type' category2='class' colors='default' />
            <ChartSummary category='ring-type' category2='class' text='default' />
          </div>
          <div style={{ height: '90vh', width: '90vw', marginBottom: '40vh' }}>
            <img src={spacing} />
            <GenericClusteredBarChart title='default' category='gill-spacing' category2='class' colors='default' />
            <ChartSummary category='gill-spacing' category2='class' text='default' />
          </div>
          {/*<SunburstController />
           <GenericBarChart title='default' category='class' colors='default' />
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
