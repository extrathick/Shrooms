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
            // prewritten chart summaries
            // odor
            if ((category === 'odor' && category2 === 'class') || (category === 'class' && category2 === 'odor')) {
                summary = 'Odor is a strong indicator of editability. If a mushroom smells like almonds or anise it is editable. The only ambiguous case is when it has no smell. If it smells like creosote, fishy, foul, musty, pungent, or spicy the mushroom is poisonous.';
            }
            // gill color
            else if ((category === 'gill-color' && category2 === 'class') || (category === 'class' && category2 === 'gill-color')) {
                summary = 'Gill colors is a strong indicator of editability. Within our data set gills colored buff or green are distinctly poisonous. Gills colored orange and red are always edible.';
            }
            else if ((category === 'ring-type' && category2 === 'class') || (category === 'class' && category2 === 'ring-type')) {
                summary = 'Ring type has three distinct cases for determining if a mushroom is edible. If the mushroom has the ring type of large or none it is poisonous. If the mushroom has a flaring ring type it is edible.';
            }            
            else if ((category === 'gill-spacing' && category2 === 'class') || (category === 'class' && category2 === 'gill-spacing')) {
                summary = 'Gill spacing can be used to indicate that a mushroom is most likely edible if the gills are crowded. Mushroom with crowded gills are 91% likely to be edible.';
            }      
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
        }
        return summary;
    }
    
    componentDidUpdate(prevProps) {
        if ((this.props.category !== prevProps.category) || (this.props.category2 !== prevProps.category2)) {
            this.setState({
                summary: this.getSummary(this.props.category, this.props.category2, this.props.text)
            });
        }
    }

    render() {
        return (
            // https://github.com/malte-wessel/react-textfit
            <Textfit mode="multi" 
            min={25}>
                {this.state.summary}
            </Textfit>
        );
    }
}

export default ChartSummary;