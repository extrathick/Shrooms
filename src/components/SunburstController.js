import React, { Component } from 'react'
import GenericEchartsSunburst from '../components/GenericEchartsSunburst';
import GenericBarChart from '../components/GenericBarChart';
import GenericClusteredBarChart from '../components/GenericClusteredBarChart';
import lookup from '../lib/csvValueLookup';
import { Dropdown, Grid, GridColumn, GridRow } from 'semantic-ui-react';
import ChartSummary from '../components/ChartSummary';

export default class SunburstController extends Component {
    constructor(props) {
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
            <Grid style={{ height: '150vh', width: '90vw' }}>
                <GridRow style={{height: '10vh'}}>
                    <GridColumn width={8}>
                        <Dropdown placeholder='Select First Value' fluid search selection options={this.headers} onChange={(event, data) => this.setInner(data.value)} />
                    </GridColumn>
                    <GridColumn width={8}>
                        <Dropdown placeholder='Select Second Value' fluid search selection options={this.headers} onChange={(event, data) => this.setOuter(data.value)} />
                    </GridColumn>
                </GridRow>
                <GridRow style={{height: '45vh'}}>
                    <GridColumn width={5}>
                        <GenericBarChart title='default' category={this.state.inner} colors='default' />
                    </GridColumn>
                    <GridColumn width={5}>
                        <GenericEchartsSunburst
                            inner={this.state.inner}
                            outer={this.state.outer}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </GridColumn>
                    <GridColumn width={5}>
                        <GenericBarChart title='default' category={this.state.outer} colors='default' />
                    </GridColumn>
                </GridRow>
                <GridRow style={{height: '45vh'}}>
                    <GenericClusteredBarChart title='default' category={this.state.inner} category2={this.state.outer} colors='default' />
                </GridRow>
                <GridRow style={{height: '20vh'}}>
                    <GridColumn>
                        <ChartSummary category={this.state.outer} category2={this.state.inner} text='default' />
                    </GridColumn>
                </GridRow>
            </Grid>
                
        )
    }
}


