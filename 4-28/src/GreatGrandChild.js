import {useContext} from 'react';
import TheContext from './TheContext'

function GreatGrandChild(props) {

    const {home, sayHello} = useContext(TheContext)

    return (
        <div>
            
            I'm the GreatGrandChild {props.lastName}
            I'm from {home}
            <button onClick={sayHello}>Say Hello</button>

        </div>
    );
}

export default GreatGrandChild;