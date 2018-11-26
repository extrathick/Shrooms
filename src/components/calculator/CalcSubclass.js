import React, { Component } from 'react'
import lookup from '../../lib/csvValueLookup';
import styled from 'styled-components';

const Title = styled.p `
    color: white;
`;

const List = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Item = styled.button`
    background-color:#d8d8d8;
    border:white;
    color:black;
    border-radius:1vw;
    height: 2vw;
    width: 4vw;
`;

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
    call = (arg) => {
        console.log(arg.target.value);
        arg.target.style='color: red';
    }
    render() {
        // i'll probably switch the p and the ul to be diffo components but that is for later. 
        return (
            <div>
                <Title>{this.state.category}</Title>
                <List>
                    {this.state.items.map((item) => {
                        return <Item key={item} value={item} onClick={this.call}>{item}</Item>
                    })}
                </List>
            </div>
        )
    }
}


class ItemButton extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
