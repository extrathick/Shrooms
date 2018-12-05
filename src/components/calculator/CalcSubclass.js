import React, { Component } from 'react'
import lookup from '../../lib/csvValueLookup';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react'

// The title for each section of the calculator
const Title = styled.p `
    color: white;
`;

// The list of all the buttons
const List = styled.div `
    display: flex;
    justify-content: space-evenly;
`;

export default class CalcSubclass extends Component {
    constructor(props){
        super(props);
        this.look = new lookup();
        let list = props.list;
        // just get the 'long' versions from the list of possible values
        let shortList = list.map(item => {
            return item.value;
        });
        this.state = {
            items: shortList,
            chosen: false
        }
    }
    // this is what happens when you click on an item. We set the value in calculator and also change the style. This also helps disable the buttons
    call = (arg, clicked) => {
        if(!clicked){
            this.setState({
                chosen: true
            });
            this.props.ret({
                key: this.props.category,
                value: arg.target.value
            }, clicked);
        }
        else {
            this.props.ret({
                key: this.props.category,
                value: arg.target.value
            }, clicked);
            this.setState({
                chosen: false
            });
        }
    }
    render() {
        return (
            <div>
            {/* This renders out the title, which is defined above */}
                <Title>{this.props.category}</Title>
                <List>
                    {/* This is the bulk of our work, in rendering the ItemButton, which handles a lot of the log. Disabled is to make it disabled later. click is our return method */}
                    {this.state.items.map((item) => {
                        return <ItemButton key={item} value={item} click={this.call} disabled={this.state.chosen}>{item}</ItemButton>
                    })}
                </List>
            </div>
        )
    }
}


// i need this for state
class ItemButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
         clicked: false,
      };
    }
    
    // this is how we track if the button was previously clicked, so that we can go ahead and keep it enabled while disabling other buttons
    clicc = (event) =>{
        this.props.click(event, this.state.clicked);
        this.setState({clicked: !this.state.clicked});
    }

  render() {
      // disabled here is either false or the passed value of disabled. This allows us to selectively disable all but one element.
      // this.props.children is the elements inside the button. Since we're using a styled component, we need to do this. 
    return (
        <Button onClick={this.clicc} value={this.props.value} toggle active={this.state.clicked} disabled={this.state.clicked ? false : this.props.disabled}>{this.props.children}</Button>
    )
  }
}
