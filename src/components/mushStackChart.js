import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';
import json from '../data/mushrooms.json';

class TryingHard extends React.Component {
    render() {
        const look = new lookup();
        
        const option = {
        color: ['#FFFFFF','#FFF333'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['Poisonous', 'Edible']
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
                data: ['Grasses', 'Leaves', 'Meadows', 'Paths', 'Urban', 'Waste', 'Woods']
            }
        ], 
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
            name: 'Poisonous',
            type: 'bar',
            barGap: 0,
            //label: labelOption,
            data: [740, 592, 36, 1008, 272, 0, 1268]
        },
        {
            name: 'Edible',
            type: 'bar',
            //label: labelOption,
            data: [1408, 240, 256, 136, 96, 192, 1880]
        }
        ]
    };//end of option
        
    return (
        <div style={{ width: '100%'}}>
            <ReactEcharts
                option={option}
                style={{height: '500px', width: '100%'}}
                />
        </div>
            )
        }//end of render
        
}//end of class

export default TryingHard;