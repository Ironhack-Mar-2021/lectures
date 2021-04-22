import React from 'react';
import { Link } from 'react-router-dom'
import games from './games.json'
console.log(games)

function MyGames(props) {
    return (
        <div>
            MyGames
         
            {games.map((game) => {
                return (
                    <li>                        
                            <Link to={`/game/${game.id}`}>Name: {game.name} </Link>
                    </li>
                )
            })}
        </div>
    );
}





export default MyGames;