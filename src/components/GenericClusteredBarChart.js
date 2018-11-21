import React from 'react';
import lookup from '../lib/csvValueLookup';
import customColors from '../lib/colors';
import ReactEcharts from 'echarts-for-react';

class GenericClusteredBarChart extends React.Component {

    constructor(props) {

        super(props);
        this.category = this.props.category;
        this.category2 = this.props.category2;
        this.title = this.props.title;
        this.colors = this.props.colors;
        this.look = new lookup();
        this.custom = new customColors();        
        this.state = {
            option: null,
            data: null
        }
        if (this.colors === 'default'){
            this.colors = this.custom.getColors(this.category2);
        }      
        this.state.data = this.look.getCountComparingTwoCategories(this.category, this.category2);
        this.state.option = this.getOption(this.title, this.state.data, this.category, this.category2, this.colors);
    }

    getOption(title, data, category, category2, colors) {

        let header = this.look.getData(category);
        let names = this.look.getData(category2);
        let alldata = data;

        let option = {
            color: colors, 
            title: {
                text: 'placeholder',
                textStyle: { color: "white" },
                x: 'center',
                y: 'top'
            },
            legend: {
                data:[],
                textStyle: {color: "white"},
                x: 'center',
                y: 'bottom'
              },            
            xAxis: {
                type: 'category',
                data: [],
                axisLabel: {
                    textStyle: { color: "white" }
                }
            },
            yAxis: {
                type: 'value'
            },
            series: [],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            }
        };

        for (var i = 1, len = alldata.length; i < len; i++){
            data = alldata[i];
            option.series.push({ data, type: 'bar', barGap: 0, name: 'placeholder name'});
        }

        option.title.text = title;
        header[0].forEach((name) => {
            option.xAxis.data.push(name);
        });
        names[0].forEach((name, index) => {
            option.legend.data.push(name);
            option.series[index].name = name;
        });        

        return option;
    }

    render() {

        return (
            <ReactEcharts
                option={this.state.option}
                style={{ height: '500px', width: '100%' }}
            />
        )
    }

}

export default GenericClusteredBarChart;