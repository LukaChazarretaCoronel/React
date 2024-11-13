import {useState} from "react"
import { WinnerModal } from "./components/WinnerModal"
import {TURNS} from "./constants.js"
import { checkWinnerFrom } from "./logic/board.js"

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
    
  const handleClick=() =>{
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)
)
const [turn, setTurn] = useState(TURNS.X)
const [winner, setWinner] = useState(null)  


const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}  

const updateBoard = (index) => {

  if (board[index]) return
  const newBoard=[...board]
  newBoard[index] = turn
  setBoard(newBoard)
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn )
  const newWinner = checkWinnerFrom(newBoard)
  if (newWinner){
    setWinner(newWinner)
  }
  else if (checkEndGame(newBoard)){
    setWinner(false)
  } 
}
  const checkEndGame = (newBoard)=> {
  return newBoard.every((square) => square !== null)
  }

return (
    <main className="board">
      <h1>Tres en linea
      </h1>
      <button onClick={resetGame}>Empezar de vuelta!</button>
      <section className="game">
      {
        board.map((square, index) => {
          return (
            <Square 
            key = {index} 
            index = {index}
            updateBoard={updateBoard}
            >
              {square}
            </Square>

          )
        })
       }
        </section>
        <section className="turn">
          <Square isSelected= {turn === TURNS.X}>
            {TURNS.X}
          </Square>
          <Square isSelected= {turn === TURNS.O}>
            {TURNS.O}
          </Square>
        </section>
       
        <WinnerModal resetGame={resetGame} winner = {winner}></WinnerModal>


    </main>
);
}
export default App
