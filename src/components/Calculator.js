import React, { Component } from 'react'
import lookup from '../lib/csvValueLookup';
import CalcSubclass from './calculator/CalcSubclass'

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        this.list = this.look.getCategories();
        // this gets rid of "class". the order of getCategories should not change for any reason, so this is an okay hack. 
        // the calculator tells you if it's edible so this is okay for the most part. 
        this.list.splice(0, 1);
        // calcval keeps track of all the values selected in the calculator
        // this should potentially be state, but this keeps redraws down.
        this.calcVal = [];
        this.state = {
            edibility: .5
        }
    }

    // remove here is a bit of a hack. if it's true i remove the item, if it's false i add it. 
    returnMethod = (keyVal, remove) => {
        if(remove){
            for(let i in this.calcVal){
                // it turns out there's no good way to do this in javascript. options are to either look at a 3rd party library, do this, or do JSON.stringify on both. 
                if(this.calcVal[i].value === keyVal.value && this.calcVal[i].key === keyVal.key){
                    this.calcVal.splice(i, 1);
                }
            }
        }
        else {
            this.calcVal.push(keyVal);
        }
        this.calculateEdibility();
    }

    // this function calcultes the edibility of a 
    calculateEdibility = () => {
        let newEdibility = .5;
        if(this.calcVal.length !== 0){
            let shortCalcVal = [];
            // this normalizes our data so we don't have to write another weird computation method
            for(let item of this.calcVal){
                shortCalcVal.push({
                    key: item.key,
                    value: this.look.getShortValue(item.key, item.value)
                });
            }
            newEdibility = this.look.getPoisonChance(shortCalcVal);
        }
        this.setState({edibility: newEdibility})
    }

    // this renders out the dom, mostly just calcsubclasses
    render() {
        let listItems = this.list.map((listItem) =>
            <CalcSubclass key={listItem} category={listItem} ret={this.returnMethod} />
        );
        return (
            <div>
                {/* Check to see if the data is valid and can be computed */}
                <h3>{(this.state.edibility > 0) ? 
                    `Chance of Edibility: ${this.state.edibility * 100}%` :
                    `No Data Found`
                }</h3>
                {listItems}
            </div>
        )
    }
}
