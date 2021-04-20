import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const students = [
  {
    name: 'Francisco'
  },
  {
    name: 'Sumeet'
  },
  {
    name: 'Hunter'
  },
  {
    name: 'Jonny'
  }
]

function App() {
  return (
    <div className="App">
      <h1>State  {Math.random()}</h1>
      <Students />
      <Counter />
    </div>
  );
}


function Students(props) {

  const [pupils, setPupils] = useState(students) //Declared our state
  const deleteStudent = (student) => {

    let newArrayOfStudents = pupils.filter(eachStudent => {
      return eachStudent.name != student
    })

    setPupils(newArrayOfStudents)
  }

  const ShowStudents = () => {
    return pupils.map(eachStudent => {
      return (
        <li key={eachStudent.name}>{eachStudent.name}
          <button onClick={(event) => deleteStudent(eachStudent.name)} >x</button>
        </li>
      )
    })
  }


  return (
    <ul>
      Students!
      <ShowStudents />
      {/* {props.students.map(eachStudent => <li>{eachStudent.name}</li>)} */}
    </ul>
  )
}





function Counter() {

  let [counter, setCounter] = useState(0)

  const up = (e) => setCounter(++counter)
  const down = (e) => setCounter(--counter)
  return (
    <>
      <h4>{Math.random()}</h4>
      <h2>{counter}</h2>

      <button onClick={up}> Up</button>
      <button onClick={down} >Down</button>

      <ShowList counter={counter} />
    </>
  )
}

function ShowList(props) {
  let listItems = []
  for (let i = 1; i <= props.counter; i++) {
    listItems.push(<li>New ListItem {i}</li>)
  }

  return (
    <ul>
      {listItems}
    </ul>
  )
}


export default App;

//Dom manipulation
//document.querySelector('button#up').onclick = function(e) {}