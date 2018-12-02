import lookup from '../lib/csvValueLookup';

class customColors {

    getColors(category, category2){

        this.look = new lookup()
        let colors = []

        if (category2 !== undefined) {
            if (this.look.getAllPossible(category).length < this.look.getAllPossible(category2).length) {
                category = category2;
            }
        }

        // setting color based on category
        if (category === 'class'){
            colors = ['#A9CBA6','#7955A0']
        }
        else if (category === 'cap-color') {
            colors = ['#C37861','#F2D285','#7C3A00','#7d7d7d','#9ed597','#ffb6c1','#6b3fa0','#da635d','#f8f8ff','#ffff93'];
        }
        else if (category === 'gill-color') {
            colors = ['#201e1e','#C37861','#F2D285','#7e4d32','#7d7d7d','#9ed597','#FFB347','#ffb6c1','#6b3fa0','#da635d','#f8f8ff','#ffff93'];
        }
        else if (category === 'stalk-color-above-ring' || category === 'stalk-color-below-ring') {
            colors = ['#C37861','#F2D285','#7C3A00','#7d7d7d','#FFB347','#ffb6c1','#da635d','#f8f8ff','#ffff93'];
        }
        else if (category === 'veil-color') {
            colors = ['#C37861','#FFB347','#f8f8ff','#ffff93'];
        }
        else if (category === 'spore-print-color') {
            colors = ['#201e1e','#C37861','#F2D285','#7e4d32','#9ed597','#FFB347','#6b3fa0','#f8f8ff','#ffff93'];
        }
        else if (this.look.getAllPossible(category).length < 4) {
            colors = ['#5B5F97', '#FFC145', '#FFFFFB'];
        }
        else {
            colors = ['#f1ca9c', '#2da0a1', '#214d4e', '#71dd82', '#458612', '#c7dd91', '#82400f', '#f68aad', '#f82387', '#d60724', '#f2cdb9', '#b08965'];
        }

        return colors
    }
}

export default customColors;