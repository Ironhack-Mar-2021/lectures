import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {

  let [message, setMessage] = useState('')
  let [messages, setMessages] = useState([])

  useEffect(() => {
    console.log('APP mounted')
    axios
      .get(`http://localhost:5000/getMessages`)
      .then(res => {
        console.log(res)
        setMessages(res.data)
      })

  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`http://localhost:5000/saveMessage`, { message: message })
    console.log(res)
    let copyOfMessages = [...messages]
    copyOfMessages.push(res.data)
    setMessages(copyOfMessages)
  }


  const showMessages = () => {
    return messages.map(eachMessage => <li key={eachMessage._id} >{eachMessage.message}</li>)
  }
  // const handleSubmitWithParams = e => {
  //   e.preventDefault()
  //   axios.post(`http://localhost:5000/saveMessagewithParams/${message}?fruit=banana&vegetable=corn`)
  // }

  return (
    <div className="App">
      <h1>Blog</h1>

      <form onSubmit={handleSubmit} >
        <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type in your message" />
        <button>Submit Message</button>
      </form>

      { showMessages()}
    </div>
  );
}

export default App;
