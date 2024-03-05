import { useState } from "react";

import Player from "./Components.jsx/Player"
import GameBoard from "./Components.jsx/GameBoard"
function App() {
  const [activePlayer,setActivePlayer] = useState('X');
  function clickSelect(){
    setActivePlayer((curActive) => curActive=== 'X'? 'O' : "X")
  }

  return <main>
    <div id="game-container">
      <ol id="players">
      <Player initialName="Player 1" symbol="X" isActive={activePlayer ==='X'}/>
      <Player initialName="Player 2" symbol="O" isActive={activePlayer==='O'}/>
        {/* <li><span className="player-name">Player 1</span>
        <span className="player-symbol">X</span>
        <span><button>Edit</button></span>
        </li>
        <li><span className="player-name">Player 2</span>
        <span className="player-symbol">O</span>
        <span><button>Edit</button></span>
        </li>
        <li></li> */}
      </ol>
      <GameBoard onSelect  />
    </div>
  </main>
}

export default App
