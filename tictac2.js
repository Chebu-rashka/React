import { hover } from "@testing-library/user-event/dist/hover";
import React,{useState} from "react";

const winCases = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Tictac=()=>{

const [currentSymbol, setCurrentSymbol]=useState("X")
const [squareData, setSquareData]=useState({})
const [isWin, setIsWin]=useState(false)
let squareLocation={}
const checkWinner=(squareIdx)=>{
    // squareLocation[squareIdx]=currentSymbol
    squareLocation={...squareData,[squareIdx]:currentSymbol}
    const currentSymbolLoc=Object.keys(squareLocation).filter((key)=>{
        return squareLocation[key]===currentSymbol
    })
    console.log(currentSymbolLoc)
    console.log(squareLocation)
    winCases.forEach((winCase)=>{
       if(winCase.every((num)=> currentSymbolLoc.includes(num.toString())))
         setIsWin(true)

        console.log(isWin)



    })
    setSquareData(squareLocation)
    setCurrentSymbol((currState)=>{
    return currState==="X"? "O":"X"
})

}

return (
<div>
    <div className="turn">{`${currentSymbol} turn`}</div>
    <div className="board">
    
        {[...Array(9)].map((square, squareIdx)=>{
            return <button
            className="square"
            key={squareIdx}
          
            onClick={()=>{
                (!squareData[squareIdx] && !isWin) && checkWinner(squareIdx)
            }}>{squareData[squareIdx]}</button> 
        })}

        <div>{isWin? <span>{`${currentSymbol=== "X" ? "O":"X"} is Winner`}
        </span>:<span>{`${Object.keys(squareData).length===9 ? "Draw": ""}`}</span> }</div>
    
    </div>
    <button className="game"
        onClick={() => {
            setIsWin(true);
            setSquareData({});
            setCurrentSymbol()
        }}
      >
        <b>Restart Game</b>
      </button>
    </div>)
}
export default Tictac




// APP

// function App() {
//     return (
//       <div className='App'>
  
//          <Tictac/>
   
//       </div>
//     )
//   }
  
//   export default App




// CSS
// .board{
//     display: flex;
//     flex-wrap: wrap;
//     height: 300px;
//     width: 300px;
//     margin: 20px;
//     padding: 3px;
//     background-color: rgb(48, 226, 16);;


   
   
// }
// .game{
//     margin-left: 20px;
//     background-color:rgb(48, 226, 16);
//     color:white;
//     cursor: pointer;

// }
// .turn{
//     margin-left: 20px;
//     color:rgb(13, 13, 13);
// }
// .square{
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100px;
//     width: 100px;
//     font-size: 80px;
//     background-color: rgb(10, 10, 10);
//     color:rgb(48, 226, 16);

// }
