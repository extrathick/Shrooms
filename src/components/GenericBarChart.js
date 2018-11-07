import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';


class GenericBarChart extends React.Component{

    constructor(props){
        super(props);
        this.category = this.props.category;
        this.title = this.props.title;
        this.colors = this.props.colors;
        this.look = new lookup();
        this.state = {
            option: null,
            data: null,
        }
        this.state.data = this.compileData(this.category, this.colors);
        this.state.option = this.getOption(this.title, this.state.data, this.category);
    }

    getOption(title, data, category){
        let header = this.look.getData(category);
        option.title.text = title;
        option.series[0].data = data;
        option.series[0].name = header[0];
        return option;
    }

    compileData(category, colors) {
        let data = this.look.getData(category);
        let series = [];
        let dataObj = {
            data: []
        }
        data[1].forEach((count, index) => {
            if (colors.length > 0 && colors.length >= data[1].length) {
                let compiled = {
                    value:count,
                    itemStyle: { color: colors[index]}
                }
                dataObj.data.push(compiled);
            }
            series.push(dataObj)            
        });

        return series;        
    }


    render(){
        console.log(this.state.option);
        return (
            <div>
            <ReactEcharts 
                option={this.state.option}
                style={{height: '500px', width: '100%'}}
            />

            
            </div>


        )
    }
}

export default GenericBarChart;


let  option = {
    title: {
        text: 'placeholder',
        textStyle: {color: "white"},
        x: 'center',
        y: 'top'
      },
      series: [{
        name: 'placeholder',
        type: 'bar',              
        data: 'placeholder'             
      }
    ]       
};