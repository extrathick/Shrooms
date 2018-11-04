import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';

class TestComponent extends React.Component {
    render(){
        // console.log(json.header);
        const option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                tooltip: {},
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        };
        const look = new lookup();
        return (
            <div style={{width: '100%'}}>
                <p>{look.lookupChar('e', 'classes')}</p>
                <ReactEcharts 
                    option={option}
                    style={{height: '500px', width: '100%'}}
                />
            </div>
        )
    }
}

export default TestComponent;