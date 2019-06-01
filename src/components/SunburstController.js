import React, { Component } from 'react';
import '../componentStyling/SunburstController.css'
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
            <div className="background">
            	<Grid>
            	    <GridRow style={{height: '5vh'}}>
            	        <GridColumn width={8}>
            	            <Dropdown placeholder='Select First Value' fluid search selection options={this.headers} onChange={(event, data) => this.setInner(data.value)} className="dropdown"/>
            	        </GridColumn>
            	        <GridColumn width={8}>
            	            <Dropdown placeholder='Select Second Value' fluid search selection options={this.headers} onChange={(event, data) => this.setOuter(data.value)} className="dropdown"/>
            	        </GridColumn>
            	    </GridRow>
            	    <GridRow style={{height: '40vh'}}>
            	        <GridColumn width={5}>
            	            <GenericBarChart title='default' category={this.state.inner} colors='default' />
            	        </GridColumn>
            	        <GridColumn width={5}>
            	            <GenericEchartsSunburst inner={this.state.inner} outer={this.state.outer} />
            	        </GridColumn>
            	        <GridColumn width={5}>
            	            <GenericBarChart title='default' category={this.state.outer} colors='default' />
            	        </GridColumn>
            	    </GridRow>
            	    <GridRow style={{height: '40vh'}}>
            	        <GenericClusteredBarChart title='default' category={this.state.inner} category2={this.state.outer} colors='default' />
            	    </GridRow>
            	    <GridRow style={{height: '3vh'}}>
            	        <GridColumn>
                            <ChartSummary category={this.state.outer} category2={this.state.inner} text='default' />                	            
            	        </GridColumn>
            	    </GridRow>
            	</Grid>
            </div>
                
        )
    }
}


