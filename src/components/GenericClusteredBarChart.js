import React from 'react';
import lookup from '../lib/csvValueLookup';
import customColors from '../lib/colors';
import ReactEcharts from 'echarts-for-react';

class GenericClusteredBarChart extends React.Component {

    constructor(props) {
        super(props);
        this.look = new lookup();
        this.custom = new customColors();        
        this.state = {
            option: this.getOption(this.getTitle(), this.look.getCountComparingTwoCategories(this.props.category, this.props.category2), this.props.category, this.props.category2, this.getColors())
        }
    }

    getTitle() {
        return (this.props.title === 'default') ? 'Number of ' + this.look.getTitle(this.props.category) + ' for each ' + this.look.getTitle(this.props.category2) : this.props.title;
    }

    getColors() {
        return (this.props.colors === 'default') ? this.custom.getColors(this.props.category, this.props.category2) : this.props.colors;
    }

    getOption(title, data, category, category2, colors) {

        let header = this.look.getData(category);
        let names = this.look.getData(category2);
        let alldata = data;

        let option = {
            color: colors,
            title: {
                text: 'placeholder',
                textStyle: { color: "white",
                            fontSize: 25 },
                x: 'center',
                y: 'top'
            },
            legend: {
                data:[],
                textStyle: {color: "white",
                            fontSize: 25},
                x: 'center',
                y: 'bottom'
              },            
            xAxis: {
                type: 'category',
                data: [],
                axisLabel: {
                    textStyle: { color: "white",
                    fontSize: 25 }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    textStyle: { color: 'white',
                    fontSize: 25 },
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

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            // eslint-disable-next-line
            this.state.option = null;
            this.setState({
                option: this.getOption(this.getTitle(), this.look.getCountComparingTwoCategories(this.props.category, this.props.category2), this.props.category, this.props.category2, this.getColors())
            });
        }
    }

    render() {
        if (this.state.option.legend.data.length === this.look.getAllPossible(this.props.category2).length){
            return (
                <ReactEcharts
                    option={this.state.option}
                    style={{ height: '100%', width: '100%', backgroundColor: "#6d121833", padding: '2%' }}
                    
                />
            )
        }
        else{
            return (null);
        }
    }

}

export default GenericClusteredBarChart;