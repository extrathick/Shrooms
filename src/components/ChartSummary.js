import React from 'react';
import lookup from '../lib/csvValueLookup';
import { Textfit } from 'react-textfit';

class ChartSummary extends React.Component {

    constructor(props) {
        super(props);
        this.category = this.props.category;
        this.category2 = this.props.category2;
        this.text = this.props.text;
        
        this.state = {
            summary: ''
        }

        this.look = new lookup();

        this.state.summary = this.getSummary(this.category, this.category2, this.text);
    }

    getSummary(category, category2, text) {
        let summary = '';
        let set1 = this.look.getTitle(category).toLowerCase();
        let set2 = this.look.getTitle(category2).toLowerCase();

        // if user set a custom text
        if (text !== 'default') {
            summary = text;
        }
        // generate a summary
        else {
            // GenericBarChart
            if (category2 === 'none') {
                summary = 'This chart represents ' + set1 + ' within the mushroom dataset.';
            }
            //GenericClusteredBarChart
            else {  
                summary = 'This chart represents the ' + set2 + ' within the '+ set1 + ' set in the mushroom dataset.';
            }
        }
        return summary;
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.category2 !== prevProps.category2) {
            this.setState({
                summary: this.getSummary(this.props.category, this.props.category2, this.props.text)
            });
        }
    }

    render() {
        return (
            <Textfit mode="single">
                {this.state.summary}
            </Textfit>
        );
    }
}

export default ChartSummary;