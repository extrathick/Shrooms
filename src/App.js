
/* THIS IS THE ROOT OF THE APP */

import React, { Component } from 'react';
import logo from './pics/shroom.png'; //Import components/Images from folders like this
import spacing from './pics/mushroom-gill-spacing.jpg';
import ring from './pics/mushroom-ring-type.jpg';
import './App.css';
import SunburstController from './components/SunburstController';
import ChartSummary from './components/ChartSummary';
//import GenericBarChart from './components/GenericBarChart';
import GenericClusteredBarChart from './components/GenericClusteredBarChart';
import { Textfit } from 'react-textfit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
              Introduction
            </Textfit>
          </div>
          <div style={{marginBottom: '15vh', textAlign: 'left'}}>
            <ChartSummary category='class' category2='class' text='The manual where the data is derived from clearly states that there is no simple rule for determining the edibility of mushrooms. We challenge that statement. By visualizatzing data we hope to find characteristics commonly shared by poisonous and edible mushrooms. These indicators will hopefully form simple rules to follow when encountering an unknown mushroom.' />
          </div>
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
              Scenario
            </Textfit>
          </div>
          <div style={{marginBottom: '15vh', textAlign: 'left'}}>
            <ChartSummary category='class' category2='class' text='Imagine you’re lost in the woods. After several days of no food you encounter two mushrooms. You’ve never seen these mushrooms before. You decide to eat one. What characteristics should you look at to determine if the mushroom is edible?' />
          </div>          
          <div style={{marginBottom: '15vh'}}>
            <SunburstController />
          </div>
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
              Odor
            </Textfit>
          </div>          
          <div style={{ height: '90vh', width: '90vw', marginBottom: '15vh', textAlign: 'left' }}>
            <GenericClusteredBarChart title='default' category='odor' category2='class' colors='default' />
            <ChartSummary category='odor' category2='class' text='default' />
          </div>
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
              Gill Color
            </Textfit>
          </div>
          <div style={{ height: '90vh', width: '90vw', marginBottom: '15vh', textAlign: 'left' }}>
            <GenericClusteredBarChart title='default' category='class' category2='gill-color' colors='default' />
            <ChartSummary category='class' category2='gill-color' text='default' />
          </div>
          <div style={{marginBottom: '5vh'}}>
            <Textfit min={50}>
              Ring Type
            </Textfit>
          </div>          
          <img src={ring} />
          <div style={{ height: '90vh', width: '90vw', marginBottom: '15vh', textAlign: 'left'}}>
            <GenericClusteredBarChart title='default' category='ring-type' category2='class' colors='default' />
            <ChartSummary category='ring-type' category2='class' text='default' />
          </div>
          <div style={{marginBottom: '5vh'}}>
            <Textfit min={50}>
              Gill Spacing
            </Textfit> 
          </div>     
          <img src={spacing} />        
          <div style={{ height: '90vh', width: '90vw', marginBottom: '15vh', textAlign: 'left' }}>
            <GenericClusteredBarChart title='default' category='gill-spacing' category2='class' colors='default' />
            <ChartSummary category='gill-spacing' category2='class' text='default' />
          </div>
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
              Strategy
            </Textfit>
          </div>
          <div style={{marginBottom: '15vh', textAlign: 'left'}}>
            <ChartSummary category='class' category2='class' text='- Smell the mushroom' />
            <ChartSummary category='class' category2='class' text='- Observe gill color' />
            <ChartSummary category='class' category2='class' text='- Observe ring type' />
            <ChartSummary category='class' category2='class' text='- If possible choose a mushroom with crowded gill spacing' />
          </div>    
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
            Conclusion
            </Textfit>
          </div>
          <div style={{marginBottom: '15vh', textAlign: 'left'}}>
            <ChartSummary category='class' category2='class' text='Now armed with your strategy you pick the edible mushroom and avoid the deadly poisonous mushroom. The additional sustenance allows you to keep moving eventually finding your way out of the forest.' />
          </div>  
          <div style={{marginBottom: '2vh'}}>
            <Textfit min={50}>
            Insight
            </Textfit>
          </div>
          <div style={{marginBottom: '15vh', textAlign: 'left'}}>
            <ChartSummary category='class' category2='class' text='Poisonous mushrooms had much more indicators as oppose to edible mushroom. Odor is by far the strongest indicator in the data set. Just by observing odor you can remove half the samples in the mushroom data set. 
' />
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