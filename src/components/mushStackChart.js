import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';
import json from '../data/mushrooms.json';

class TryingHard extends React.Component {
    
    constructor(props) {
        super(props);
        this.categorydesu = this.props.categorydesu;
        this.title = this.props.title;
        this.colorshit = this.props.colorshit;
        this.look = new lookup();
        this.state = {
            option: null,
            data: null,
        }//end of state
        this.state.data = this.compileData(this.categorydesu, this.colorshit);
        this.state.option = this.getOption(this.title, this.state.data, this.category);
    }//end of constructor
        
    getOption(title, data, category){
        let header = this.look.getData(category);
        
        let option = {
        title: {
            text: 'Habitats',
            textStyle: {color: "white"},
            x: 'center',
            y: 'top'
          },
        tooltip: {},
        legend: {
            data: ['Poisonous', 'Edible'],
            textStyle: {color: "white"},
            x: 'center',
            y: 'bottom'            
        },
        toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar', 'stack', 'tilted']},
                restore: {show: true},
                saveAsImage: {show: true}
        }
        }, //end of toolbox
        calculable: true,
        xAxis: [
            {
                type: 'category',
                axisTick: {show: false},
                data: [],
                axisLabel: {
                    textStyle: {color: "white"}
                }
            },
        ], 
        yAxis: 
            {
                type: 'value'
            },
        series: [],
    }
    
    option.title.text = title;
    header[0].forEach((name, index) => {
        option.xAxis.data.push(name);
    });
    option.series.push({ data, type: 'bar'});
    return option;
    }//end of getOption

    compileData(category, colorshit) {
        let data = this.look.getData(category);
        let series = [];
        data[1].forEach((count, index) => {
            if (colorshit.length > 0 && colorshit.length >= data[1].length) {
                series.push({
                    value: count,
                    itemStyle: { color: colorshit[index] }
                });
            }
        });
        return series;
    }//end of compileData

render() {
    console.log(this.state.option);
    return (
        <div style={{ width: '100%'}}>
            <ReactEcharts
                option={this.state.option}
                style={{height: '500px', width: '100%'}}
                />
        </div>
            )
        }//end of render
}//end of class

export default TryingHard;