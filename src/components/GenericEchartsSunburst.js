import React from 'react';
import lookup from '../lib/csvValueLookup';
import ReactEcharts from 'echarts-for-react';
import json from '../data/mushrooms.json';

// This makes a Sunburst chart. It requires the inner and outer prop to be set to valid categories from the mushroom data
class GenericEchartsSunburst extends React.Component{
    // initial setup and data crunching
    constructor(props){
        super(props);
        this.look = new lookup();
        this.state = {
            option: null
        }
        this.state.option = this.getOption();
    }

    getOption(){
        const { inner, outer } = this.props;
        this.computed = this.compute(inner, outer);
        let data = [];
        // build up the data
        for(let valueInner of this.computed){
            let obj = {};
            obj.name = valueInner.value;
            obj.children = [];
            for(let valueOuter of valueInner.outer){
                let outerObj = {};
                outerObj.name = valueOuter.value;
                outerObj.value = valueOuter.number;
                obj.children.push(outerObj);
            }
            data.push(obj);
        }
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

    // This does the math of the sunburst. I belive this to be correct
    compute(innerCategory, outerCategory){
        // Small function to make the objects to have a number value that is initially 0
        function computeHelper(obj){
            let retObj = {}
            retObj.key = obj.key;
            retObj.value = obj.value;
            retObj.number = 0;
            return retObj;
        }
        // come up with the inner categoryies, but add a number and set to 0
        const inner = this.look.getAllPossible(innerCategory).map(computeHelper);
        // for each item in the inner category, add the outer category with number = 0
        for(let number in inner){
            inner[number].outer = this.look.getAllPossible(outerCategory).map(computeHelper);
        }
        const innerNumber = this.look.getCategoryNumber(innerCategory);
        const outerNumber = this.look.getCategoryNumber(outerCategory);
        // I think this will take a horrendous amount of time. I can't think of anything else tho?
        // feel free to refactor this
        for(let datum of json.data){
            for(let itemIn in inner){
                if(datum[innerNumber] === inner[itemIn].key){
                    inner[itemIn].number++;
                    for(let itemOut of inner[itemIn].outer){
                        if(datum[outerNumber] === itemOut.key){
                            itemOut.number++;
                        }
                    }
                }
            }
        }
        return inner;
    }

    render(){
        // We may need to change the style, or just pass in style as a prop
        return (
            <ReactEcharts 
                option={this.state.option}
                style={{height: '500px', width: '100%'}}
            />
        )
    }
}

export default GenericEchartsSunburst;