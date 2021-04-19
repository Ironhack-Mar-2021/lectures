import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Sandwich from './Sandwich'

function App() {

  let [bread, setBread] = useState('wheat')

  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      {/* <p>{Sandwich()}</p> */}
      <div>


        <Sandwich
          protein="chicken"
          cheese="cheddar"
          toppings={["lettuce", "tomato", "bacon", "avacado", "peanut butter"]}
          bread={bread}
        // toppings={[
        //   { name: "lettuce" },
        //   { name: "tomato" },
        //   { name: "bacon" }
        // ]}
        />
        <div>Plate</div>

        <button onClick={() => setBread('croissant')} >Change Bread</button>


      </div>
    </div>
  );
}






export default App;
