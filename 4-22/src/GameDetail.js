import React, { useState, useEffect } from 'react';
import games from './games.json'




function GameDetail(props) {


    let game = games.find(eachGame => {
        return eachGame.id == props.match.params.gameId
    })


    return (
        <div>
            <h1>GameDetail</h1>
            <h2>{game.name}</h2>
            <div>Difficulty: {game.difficulty}</div>
            <div>Rating: {game.rating}</div>
            <div>Year: {game.year}</div>
        </div>
    );
}



// function GameDetail(props) {

//     console.log(props.match.params.gameId, games)

//     let game = games.find(eachGame => {
//         return eachGame.id == props.match.params.gameId
//     })


//     return (
//         <div>
//             <h1>GameDetail</h1>
//             <h2>{game.name}</h2>
//             <div>Difficulty: {game.difficulty}</div>
//             <div>Rating: {game.rating}</div>
//             <div>Year: {game.year}</div>
//         </div>
//     );
// }

export default GameDetail;