import React from 'react';
import ReactEcharts from 'echarts-for-react';
import lookup from '../lib/csvValueLookup';
import json from '../data/mushrooms.json';

class OdorSVG extends React.Component {
    render(){
        
        const look = new lookup();
        
        var a = 0;
        var l = 0;
        var c = 0;
        var y = 0;
        var f = 0;
        var m = 0;
        var n = 0;
        var p = 0;
        var s = 0;

        for (var i = 0; i < json.data.length; i++) {
            if (json.data[i][5] === "a") {
                a++;
            }
            if (json.data[i][5] === "l") {
                l++;
            }
            if (json.data[i][5] === "c") {
                c++;
            }
            if (json.data[i][5] === "y") {
                y++;
            }
            if (json.data[i][5] === "f") {
                f++;
            }
            if (json.data[i][5] === "m") {
                m++;
            }
            if (json.data[i][5] === "n") {
                n++;
            }
            if (json.data[i][5] === "p") {
                p++;
            }
            if (json.data[i][5] === "s") {
                s++;
            }
        }

        const option = {
            title: {
                text: 'Number of Mushrooms by Odor',
                textStyle: {color: "white"},
                x: 'center',
                y: 'top'
              },
              tooltip: {},
              legend: {
                data:['Number of mushrooms'],
                textStyle: {color: "white"},
                x: 'center',
                y: 'bottom'
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
                name: 'Number of mushrooms',
                type: 'bar',              
                data: [a, l, c, y, f, m, n, p, s]             
              }]        
        };
        
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

export default OdorSVG;