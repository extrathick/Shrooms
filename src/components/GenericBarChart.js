import React from 'react';
import lookup from '../lib/csvValueLookup';
import customColors from '../lib/colors';
import ReactEcharts from 'echarts-for-react';

class GenericBarChart extends React.Component {

    constructor(props) {
        super(props);

        this.look = new lookup();
        this.custom = new customColors();
        this.state = {
                    //option: title, data, category
            option: this.getOption(this.look.getTitle(this.props.category), this.compileData(this.props.category, this.custom.getColors(this.props.category)), this.props.category)
        }


    }

    getDefault() {
        this.setState({
            title: this.look.getTitle(this.state.category),
            colors: this.custom.getColors(this.state.categroy)
        });
    }

    getOption(title, data, category) {
        let header = this.look.getData(category);
        let option = {
            title: {
                text: 'placeholder',
                textStyle: { color: 'white' },
                x: 'center',
                y: 'top'
            },
            xAxis: {
                type: 'category',
                data: [],
                axisLabel: {
                    textStyle: { color: 'white' }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: { color: 'white' }
                }
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

        option.title.text = title;
        header[0].forEach((name, index) => {
            option.xAxis.data.push(name);
        });
        option.series.push({ data, type: 'bar' });

        return option;
    }

    compileData(category, colors) {
        let data = this.look.getData(category);
        let series = [];
        data[1].forEach((count, index) => {
            if (colors.length > 0 && colors.length >= data[1].length) {
                series.push({
                    value: count,
                    itemStyle: { color: colors[index] }
                });
            }

        });

        return series;
    }

    componentDidUpdate(prevProps){              
        if(this.props.category !== prevProps.category){
            this.setState({
                option: this.getOption(this.look.getTitle(this.props.category), this.compileData(this.props.category, this.custom.getColors(this.props.category)), this.props.category)
            });
        }
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

export default GenericBarChart;