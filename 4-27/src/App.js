import { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  let [dogPic, setDogPic] = useState('')
  let [ourDogs, setOurDogs] = useState([])

  useEffect(() => {

    axios
      .get(`https://dog.ceo/api/breeds/image/random`)
      .then(res => {
        console.log(res)
        setDogPic(res.data.message)
      })

    axios
      .get(`https://ironrest.herokuapp.com/aprilDogs`)
      .then(res => {
        console.log(res)
        setOurDogs(res.data)
      })


  }, [])


  const saveDog = async () => {
    // axios
    //   .post(`https://ironrest.herokuapp.com/aprilDogs`, { dogPic: dogPic })
    //   .then(res => console.log(res))
    let res = await axios.post(`https://ironrest.herokuapp.com/aprilDogs`, { dogPic: dogPic })
    console.log(res)
  }

  const showDogs = () => {
    return ourDogs.map(eachDog => {
      return <img width="300" src={eachDog.dogPic} />
    })
  }


  return (
    <div className="App">
      <img width="300" src={dogPic} />
      <hr />
      <button onClick={saveDog}>Save Dog</button>

      <h2>Our dogs</h2>

      {showDogs()}

    </div>
  );
}

export default App;
