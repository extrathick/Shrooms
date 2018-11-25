import React, { Component } from 'react'
import lookup from '../../lib/csvValueLookup';


export default class CalcSubclass extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        let list = this.look.getAllPossible(props.category);
        let shortList = list.map(item => {
            return item.value;
        });
        this.state = {
            category: props.category,
            items: shortList
        }
    }
    render() {
        // i'll probably switch the p and the ul to be diffo components but that is for later. 
        return (
            <div>
                <p>{this.state.category}</p>
                <ul>
                    {this.state.items.map((item) => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        )
    }
}
