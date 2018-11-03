import React from 'react';
import lookup from '../lib/csvValueLookup';

class TestComponent extends React.Component {
    render(){
        const look = new lookup();
        return (
            <p>{look.lookupChar('e', 'classes')}</p>
        )
    }
}

export default TestComponent;