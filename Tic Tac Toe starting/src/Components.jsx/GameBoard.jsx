import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];


export default function GameBoard() {
   const [gameBoard, setgameBoard]= useState(initialGameBoard);
   function selectSquare (rowIndex, colIndex){
    setgameBoard((prevGameBoard) =>{
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
        updatedBoard[rowIndex][colIndex] = clickSelect();
        return updatedBoard;
    });
    //onSelectSquare()
   }
    return (
    <ol id='game-board'>
        {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol, colIndex) => (
            <li key={colIndex} >
                <button onClick={() => selectSquare(rowIndex, colIndex)} >{playerSymbol}</button>
            </li>
        ))}
        </ol>
        </li>
        ))}
    </ol>
    );
}