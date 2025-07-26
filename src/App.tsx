import Block from "./components/Block"
import {useState, useEffect} from "react"

import "./App.css"


function App() {
  const [state, setState] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");

  const checkWinner = (state: any[]) => {
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0;i<win.length; i++){
      const [a,b,c] = win[i];
      if(state[a]!==null && state[b]!==null && state[c]!==null && state[a]===state[b] && state[a]===state[c]) return true;
    }
    return false;
  }

  console.log(state);

  const handleBlockClick = (index: number) => {
    const stateCopy = Array.from(state);

    if(stateCopy[index]!== null) return;

    stateCopy[index] = player;

    setState(stateCopy);

    //check if someone wone
    const win = checkWinner(stateCopy);

    // if(win){
    //   alert(`${player} won the game`);
    // }
    if (win) {
      setTimeout(() => {
        alert(`${player} won the game`);
      }, 0); // ⏱ delay so DOM updates before alert
    }

    // Put this function in the queue, and only run it after the current execution stack is done

    setPlayer(player==="X"?"O":"X"); //toggle state

  }
  


  return (
    <>
      <div className="board">
        <div className="row">
          <Block onClick={()=>handleBlockClick(0)} value={state[0]} />
          <Block onClick={()=>handleBlockClick(1)} value={state[1]}/>
          <Block onClick={()=>handleBlockClick(2)} value={state[2]}/>
        </div>
        <div className="row">
          <Block onClick={()=>handleBlockClick(3)} value={state[3]}/>
          <Block onClick={()=>handleBlockClick(4)} value={state[4]}/>
          <Block onClick={()=>handleBlockClick(5)} value={state[5]}/>
        </div>
        <div className="row">
          <Block onClick={()=>handleBlockClick(6)} value={state[6]}/>
          <Block onClick={()=>handleBlockClick(7)} value={state[7]}/>
          <Block onClick={()=>handleBlockClick(8)} value={state[8]}/>

        </div>
      </div>
    </>
  )
}

export default App
