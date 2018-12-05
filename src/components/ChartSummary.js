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
                summary = 'Odor is a strong indicator of edibility. If a mushroom smells nice (almonds or anise) it is edible. If it smells bad (creosote, fishy, foul, musty, pungent, or spicy) the mushroom is poisonous. The only ambiguous case is when it has no smell. No smell is still likely to be edible about 97% of the time.';
            }
            // gill color
            else if ((category === 'gill-color' && category2 === 'class') || (category === 'class' && category2 === 'gill-color')) {
                summary = 'Buff color gills are the most common and each of those samples are poisonous. Green is less common but it is distinctly poisonous. Gills colored orange and red are always edible.';
            }
            else if ((category === 'ring-type' && category2 === 'class') || (category === 'class' && category2 === 'ring-type')) {
                summary = 'A ring (if present) is formed around the stipe (stalk). 15% of our samples have large rings and they are only poisonous. I small set of mushrooms are flared rings and they are all edible.';
            }            
            else if ((category === 'gill-spacing' && category2 === 'class') || (category === 'class' && category2 === 'gill-spacing')) {
                summary = 'Gill spacing can be used to indicate that a mushroom is most likely edible if the gills are crowded. Mushrooms with crowded gills are 91% likely to be edible.';
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