import React, { Component } from 'react'
import lookup from '../../lib/csvValueLookup';
import styled from 'styled-components';

const Title = styled.p `
    color: white;
`;

const List = styled.div `
    display: flex;
    justify-content: space-evenly;
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
            items: shortList,
            chosen: false
        }
    }
    call = (arg, clicked) => {
        if(!clicked){
            this.setState({
                chosen: true
            });
            this.props.ret({
                key: this.state.category,
                value: arg.target.value
            });
            arg.target.style='color: red';
        }
        else {
            this.setState({
                chosen: false
            });
            arg.target.style='color: black';
        }
    }
    render() {
        // i'll probably switch the p and the ul to be diffo components but that is for later. 
        return (
            <div>
                <Title>{this.state.category}</Title>
                <List>
                    {this.state.items.map((item) => {
                        return <ItemButton key={item} value={item} click={this.call} disabled={this.state.chosen}>{item}</ItemButton>
                    })}
                </List>
            </div>
        )
    }
}


const Button = styled.button `
    display: inline-block;
    padding-left: 1vw;
    padding-right: 1vw;
    background-color:#d8d8d8;
    border:white;
    color:black;
    border-radius:1vw;
    height: 3vw;
`;


// i need this for state
class ItemButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
         clicked: false,
      };
    }
    
    clicc = (event) =>{
        this.props.click(event, this.state.clicked);
        this.setState({clicked: !this.state.clicked});
    }

  render() {
    return (
        <Button onClick={this.clicc} value={this.props.value} disabled={this.state.clicked ? false : this.props.disabled}>{this.props.children}</Button>
    )
  }
}
