import React, { Component } from 'react'
import lookup from '../../lib/csvValueLookup';
import styled from 'styled-components';

const Title = styled.p `
    color: white;

`;

const List = styled.div `
    display: flex;
`;

const Item = styled.div `
    justify-content: space-around;
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
    render() {
        // i'll probably switch the p and the ul to be diffo components but that is for later. 
        return (
            <div>
                <Title>{this.state.category}</Title>
                <List>
                    {this.state.items.map((item) => {
                        return <Item key={item}>{item}</Item>
                    })}
                </List>
            </div>
        )
    }
}
