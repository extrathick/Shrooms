import React from 'react';
import ReactEcharts from 'echarts-for-react';
import lookup from '../lib/csvValueLookup';
import json from '../data/mushrooms.json';

class ClassOdorSVG extends React.Component {
    render(){
        
        const look = new lookup();
        
        //Edible
        var ae = 0;
        var le = 0;
        var ce = 0;
        var ye = 0;
        var fe = 0;
        var me = 0;
        var ne = 0;
        var pe = 0;
        var se = 0;

        //Poisonous
        var ap = 0;
        var lp = 0;
        var cp = 0;
        var yp = 0;
        var fp = 0;
        var mp = 0;
        var np = 0;
        var pp = 0;
        var sp = 0;        

        for (var i = 0; i < json.data.length; i++) {
            if (json.data[i][5] === "a") {
                if (json.data[i][0] === "e") {
                    ae++;
                } else {
                    ap++;
                }     
            }
            if (json.data[i][5] === "l") {
                if (json.data[i][0] === "e") {
                    le++;
                } else {
                    lp++;
                }     
            }
            if (json.data[i][5] === "c") {
                if (json.data[i][0] === "e") {
                    ce++;
                } else {
                    cp++;
                }     
            }
            if (json.data[i][5] === "y") {
                if (json.data[i][0] === "e") {
                    ye++;
                } else {
                    yp++;
                }     
            }
            if (json.data[i][5] === "f") {
                if (json.data[i][0] === "e") {
                    fe++;
                } else {
                    fp++;
                }     
            }
            if (json.data[i][5] === "m") {
                if (json.data[i][0] === "e") {
                    me++;
                } else {
                    mp++;
                }     
            }
            if (json.data[i][5] === "n") {
                if (json.data[i][0] === "e") {
                    ne++;
                } else {
                    np++;
                }            
            }
            if (json.data[i][5] === "p") {
                if (json.data[i][0] === "e") {
                    pe++;
                } else {
                    pp++;
                }     
            }
            if (json.data[i][5] === "s") {
                if (json.data[i][0] === "e") {
                    se++;
                } else {
                    sp++;
                }     
            }
        }

        const option = {
            color: ['#FFFFFF','#3ed187'],
            title: {
                text: 'Edible Versus Odor',
                textStyle: {color: "white"},
                x: 'center',
                y: 'top'
              },
              tooltip: {},
              legend: {
                data:['Edible', 'Poisonous'],
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
                        dataView: {show: false, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar', 'stack', 'tilted']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
              xAxis: {
                data: look.getAllPossible('odor'),
                axisLabel: {
                    textStyle: {color: "white"}
                }
              },
              yAxis: {
                axisLabel: {
                    textStyle: {color: "white"}
                }                     
              },
              series: [{
                name: 'Edible',
                type: 'bar',  
                barGap: 0,           
                data: [ae, le, ce, ye, fe, me, ne, pe, se]             
              },
                {
                name: 'Poisonous',
                type: 'bar',
                barGap: 0,              
                data: [ap, lp, cp, yp, fp, mp, np, pp, sp]             
              }
            ]        
        };
        // console.log(option);
        return (
            <div style={{width: '100%'}}>
                <ReactEcharts 
                    option={option}
                    style={{height: '500px', width: '100%'}}
                />
            </div>
        )
    } 
}

export default ClassOdorSVG;