import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import MyGames from './MyGames'
import GameDetail from './GameDetail'




function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/games'>My Games</Link>
      </nav>

      {/* <a href="contact">Contact Old Skool</a> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/games' component={MyGames} />
        <Route exact path='/game/:gameId' component={GameDetail} />
      </Switch>



    </div>
  );
}
//http://localhost:3000/game/adsfadsfasdfdsa

export default App;
