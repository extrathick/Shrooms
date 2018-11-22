import React from 'react';
import lookup from '../lib/csvValueLookup';

class ChartSummary extends React.Component {

    constructor(props) {
        super(props);
        this.category = this.props.category;
        this.category2 = this.props.category2;
        this.text = this.props.text;
        this.look = new lookup();

        this.summary = this.getSummary(this.category, this.category2, this.text);
    }

    getSummary(category, category2, text) {
        if (text === 'default') {
            category = this.look.getTitle(category).toLowerCase();
        }
        if(category2 !== 'none' && text === 'default') {
            category2 = this.look.getTitle(category2).toLowerCase();
            text = 'This chart represents the subset of ' + category2 + ' within the '+ category + ' set in the mushroom dataset.';
        }
        else {
            text = 'This chart represents ' + category + ' within the mushroom dataset.';
        }

        return text;
    }

    render() {
        return (
          <div>
            <p>
              {this.summary}
            </p>
          </div>
        );
    }
}

export default ChartSummary;