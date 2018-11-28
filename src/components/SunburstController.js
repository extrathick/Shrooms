import React, { Component } from 'react'
import GenericEchartsSunburst from '../components/GenericEchartsSunburst';
import GenericBarChart from '../components/GenericBarChart';
import GenericClusteredBarChart from '../components/GenericClusteredBarChart';
import lookup from '../lib/csvValueLookup';
import { Dropdown } from 'semantic-ui-react';

export default class SunburstController extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        this.headers = this.setHeader();
        this.state = {
            inner: 'class',
            outer: 'class'
        }
    }

    setHeader = () => {
        let header = [];
        let category = this.look.getCategories();
        category.forEach(element => {
            header.push({
                text: element,
                value: element
            });
        });

        return header;
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
            <Dropdown placeholder='Select First Value' fluid search selection options={this.headers} onChange={(event, data) => this.setInner(data.value)}/>
            <Dropdown placeholder='Select Second Value' fluid search selection options={this.headers} onChange={(event, data) => this.setOuter(data.value)}/>
            <GenericBarChart title='default' category={this.state.inner} colors='default' />
            <GenericEchartsSunburst 
                inner={this.state.inner}
                outer={this.state.outer}
                style={{height: '500px', width: '100%'}}
            />
            <GenericBarChart title='default' category={this.state.outer} colors='default' />
            <GenericClusteredBarChart title='default' category={this.state.inner} category2={this.state.outer} colors='default' />
        </div>
        )
    }
}


