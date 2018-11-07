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
        this.state.data = this.compileData();
        this.state.option = this.getOption();
    }

    getOption(){
      
    }

    compileData(){

    }


    render(){
        
        return (
            // <ReactEcharts 
            //     option={this.state.option}
            //     style={{height: '500px', width: '100%'}}
            // />
            <div>

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
      },
        {
        name: 'placeholder',
        type: 'bar',              
        data: 'placeholder'             
      }
    ]       
};