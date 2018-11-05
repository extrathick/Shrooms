import React, { Component } from 'react'
import GenericEchartsSunburst from '../components/GenericEchartsSunburst';

export default class SunburstController extends Component {
    constructor(props){
        super(props);
        this.state = {
            inner: 'classes',
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
        <Dropdown items={['classes', 'gill-color']} onChange={(event) => this.setInner(event.target.value)}/>
        <Dropdown items={['bruises', 'classes']} onChange={(event) => this.setOuter(event.target.value)}/>
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
      <select onChange={props.onChange}>
          {items}
      </select>
    )
}

