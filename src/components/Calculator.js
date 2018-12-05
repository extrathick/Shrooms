import React, { Component } from 'react'
import lookup from '../lib/csvValueLookup';
import CalcSubclass from './calculator/CalcSubclass';
import styled from 'styled-components';

export default class Calculator extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        this.list = this.look.getCategories();
        // calcval keeps track of all the values selected in the calculator
        // this should potentially be state, but this keeps redraws down.
        this.calcVal = [];
        let visibleItems = this.getUsedItems();
        let list = visibleItems.map(value => value.category);
        console.log(visibleItems);
        this.state = {
            edibility: .5,
            visibleItems: list,
            vis: visibleItems
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

    getUsedItems = () => {
        let items = this.look.getCategories();
        let ret = [];
        for(let item of items){
            let list = this.look.getAllPossible(item);
            let usedValues = [];
            for(let value of list){
                if(this.isUsed(item, value.key)){
                    usedValues.push(value);
                }
            }
            if(usedValues.length !== 1){
                ret.push({
                    category: item,
                    values: usedValues
                });
            }
        }
        return ret;
    }

    isUsed = (category, item) => {
        let count = this.look.getValueCount(category, item);
        if(count[0] + count[1] === 0){
            return false;
        }
        else{
            return true;
        }
    }

    // this function calcultes the edibility of a selection of attributes
    calculateEdibility = () => {
        let newEdibility = .5;
        if(this.calcVal.length !== 0){
            let shortCalcVal = [];
            // this normalizes our data so we don't have to write another weird computation method
            for(let item of this.calcVal){
                if(item !== 'class'){
                    shortCalcVal.push({
                        key: item.key,
                        value: this.look.getShortValue(item.key, item.value)
                    });
                }
            }
            newEdibility = this.look.getPoisonChance(shortCalcVal);
        }
        this.setState({edibility: newEdibility})
    }

    // this renders out the dom, mostly just calcsubclasses
    render = () => {
        let listItems = this.state.visibleItems.map((listItem, index) => {
            if(index === 0){
                // remove the edibilty button because it doesn't make sense
                return null;
            }
            else{
                let categoryNum = 0;
                for(let item in this.state.vis){
                    if(this.state.vis[item].category === listItem){
                        categoryNum = item;
                    }
                }
                return (
                    <CalcSubclass key={listItem} category={listItem} ret={this.returnMethod} list={this.state.vis[categoryNum].values} />
                );
            }
        });
        return (
            <div>
                {/* Check to see if the data is valid and can be computed */}
                <Header>{(this.state.edibility > 0) ? 
                    `Chance of Edibility: ${(this.state.edibility * 100).toPrecision(4)}%` :
                    `No Data Found`
                }</Header>
                {listItems}
            </div>
        )
    }
}



const Header = styled.h1`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
`