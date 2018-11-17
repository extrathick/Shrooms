/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/logo.svg'; //Import components/Images from folders like this
import './App.css';
import TestComponent from './components/test';
import SunburstController from './components/SunburstController';
import OdorSVG from './components/OdorSVG';
import ClassOdorSVG from './components/ClassOdorSVG';
import GenericBarChart from './components/GenericBarChart';
import GenericClusteredBarChart from './components/GenericClusteredBarChart';
import TryingHard from './components/mushStackChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <GenericBarChart title='Population Shrooms' category='population' colors={['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83']} />
          <GenericBarChart title='Odor' category='odor' colors={['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#d48265', '#91c7ae','#749f83']} />
          <TestComponent />
          <SunburstController />
          <OdorSVG />
          <ClassOdorSVG />
          <TryingHard  title='placeholder' categorydesu='population' colorshit={['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#d48265', '#91c7ae','#749f83']} />
          <GenericClusteredBarChart title='Population Shrooms' category='population' category2='population' colors={['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83']} colors2={["#749f83", "#91c7ae", "#d48265", "#61a0a8", "#2f4554", "#c23531"]}/>
        </header>
      </div>
    );
  }
}

export default App; //For each component you make, you'll need to export it.
