import { useContext } from 'react';
import TheContext from './TheContext'


function Boy(props) {


    const { home, sayHello } = useContext(TheContext)
    return (
        <div>
            Im a Boy :).  My last name is {props.lastName}!
            And my home is {home}
            <button onClick={() => props.setGivePizza(true)}>Give Pizza</button>
            <button onClick={sayHello}>sayHello</button>

        </div>
    );
}

export default Boy;