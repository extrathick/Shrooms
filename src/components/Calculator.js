import React, { Component } from 'react'
import lookup from '../lib/csvValueLookup';
import CalcSubclass from './calculator/CalcSubclass'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        this.list = this.look.getCategories();
        this.calcVal = [];
    }

    returnMethod = (keyVal) => {
        this.calcVal.push(keyVal);
        console.log(this.calcVal);
    }

    render() {
        let listItems = this.list.map((listItem) =>
            <CalcSubclass key={listItem} category={listItem} ret={this.returnMethod} />
        );
        return (
            <div>
                {listItems}
            </div>
        )
    }
}
