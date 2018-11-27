import React, { Component } from 'react'
import GenericEchartsSunburst from '../components/GenericEchartsSunburst';
import GenericBarChart from '../components/GenericBarChart';
import GenericClusteredBarChart from '../components/GenericClusteredBarChart';
import lookup from '../lib/csvValueLookup';

export default class SunburstController extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        this.headers = this.look.getCategories();
        this.state = {
            inner: 'class',
            outer: 'bruises'
        }
    }

    setInner = (inner) => {
        this.setState((state, props) => {
            return {
                inner: inner,

            };
        });
    }

    setOuter = (outer) => {
        this.setState((state, props) => {
            return {

                outer: outer
            };
        });
    }

    render() {
        return (
        <div style={{width: '100%'}}>
        <GenericBarChart title='default' category={this.state.inner} colors='default' />
        <Dropdown items={this.headers} onChange={(event) => this.setInner(event.target.value)} selected={this.state.inner}/>
        <Dropdown items={this.headers} onChange={(event) => this.setOuter(event.target.value)} selected={this.state.outer}/>
            <GenericEchartsSunburst 
                inner={this.state.inner}
                outer={this.state.outer}
                style={{height: '500px', width: '100%'}}
            />
        </div>
        )
    }
}
const Dropdown = (props) => {
    let items = props.items.map(item => {
        if(props.selected){
            if(props.selected === item){
                // just changed this to remove the error in the console
                // return <option key={item} value={item} selected={"selected"}>{item}</option>
                return <option key={item} value={item} >{item}</option>
            }
        }
        return <option key={item} value={item}>{item}</option>
    });
    return (
      <select selected={props.selected} onChange={props.onChange}>
          {items}
      </select>
    )
}

