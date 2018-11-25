import React, { Component } from 'react'
import lookup from '../lib/csvValueLookup';
import CalcSubclass from './calculator/CalcSubclass'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        this.list = this.look.getCategories();
    }
    render() {
        let listItems = this.list.map((listItem) =>
            <CalcSubclass key={listItem} category={listItem} />
        );
        return (
            <div>
                {listItems}
            </div>
        )
    }
}
