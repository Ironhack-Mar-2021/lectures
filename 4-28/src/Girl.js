import React from 'react';
import GrandChild from './GrandChild'

function Girl({ lastName, givePizza }) {

    //Nom nom thanks for the pizza
    const style = { background: 'pink' }
    return (
        <div style={style}>
            Girl Child :).  My last name is {lastName}

            {givePizza && `Nom nom thanks for the pizza`}


            <hr />

            <GrandChild lastName={lastName} />
        </div>
    );
}

export default Girl;