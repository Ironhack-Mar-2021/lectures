import React from 'react';
import GreatGrandChild from './GreatGrandChild'
function GrandChild(props) {
    return (
        <div>
            GrandChild
            <GreatGrandChild lastName={props.lastName} />
        </div>
    );
}

export default GrandChild;