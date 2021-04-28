import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Boy from './Boy'
import Girl from './Girl'
import TheContext from './TheContext'


function App() {

  let [lastName, setLastName] = useState('Brito')
  let [givePizza, setGivePizza] = useState(false)
  const context = {
    home: 'Cuba',
    sayHello: () => alert('Hola')
  }

  return (
    <TheContext.Provider value={context}>
      <div className="App">
        <h4>Moving State around components</h4>
      I'm the parent, my last name is {lastName}

        <Boy setGivePizza={setGivePizza} lastName={lastName} />
        <Girl givePizza={givePizza} lastName={lastName} />
      </div>
    </TheContext.Provider>
  );
}

export default App;
