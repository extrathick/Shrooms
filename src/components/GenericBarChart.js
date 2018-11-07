import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';

class GenericBarChart extends React.Component{

    constructor(props){
        super(props);
        this.look = new lookup();
        this.state = {
            option: null
        }
        this.state.option = this.getOption();
    }

    getOption(){

        // set the option
        let option = {
            series: {
                type: 'sunburst',
                // highlightPolicy: 'ancestor',
                data: data,
                radius: [0, '90%'],
                label: {
                    rotate: 'radial'
                }
            }
        };
        return option;
    }


    render(){

        return (
            <ReactEcharts 
                option={this.state.option}
                style={{height: '500px', width: '100%'}}
            />
        )
    }
}

export default GenericBarChart;