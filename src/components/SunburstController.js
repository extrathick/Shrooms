import React, { Component } from 'react'
import GenericEchartsSunburst from '../components/GenericEchartsSunburst';
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
                outer: state.outer
            };
        });
    }

    setOuter = (outer) => {
        console.log('outer');
        this.setState((state, props) => {
            return {
                inner: state.inner,
                outer: outer
            };
        });
    }

    render() {
        return (
        <div style={{width: '100%'}}>
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
        return <option key={item} value={item}>{item}</option>
    });
    return (
      <select value={props.selected} onChange={props.onChange}>
          {items}
      </select>
    )
}

