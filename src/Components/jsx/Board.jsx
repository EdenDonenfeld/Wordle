import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import '../css/Board.css';

const Board = ({ letter }) => {
    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(5).fill('')));
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCol, setCurrentCol] = useState(0);

    useEffect(() => {
        if (letter) {
            if (letter === 'Enter') {
                // Check if word is correct
            }
            if (letter === 'Del') {
                console.log('Delete');
                console.log(currentRow, currentCol);
                const newBoard = board.map((row, rowIndex) =>
                    row.map((cell, colIndex) =>
                        rowIndex === currentRow && colIndex === currentCol-1 ? '' : cell
                    )
                );
                setBoard(newBoard);

                if (currentCol > 0) {
                    setCurrentCol(currentCol - 1);
                } else {
                    setCurrentCol(4);
                    setCurrentRow(currentRow - 1);
                }
            } else {
                const newBoard = board.map((row, rowIndex) => 
                    row.map((cell, colIndex) => 
                        rowIndex === currentRow && colIndex === currentCol ? letter : cell
                    )
                );
                setBoard(newBoard);
    
                if (currentCol < 4) {
                    setCurrentCol(currentCol + 1);
                } else {
                    setCurrentCol(0);
                    setCurrentRow(currentRow + 1);
                }
            }
        }
    }, [letter]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="words-container">
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Cell key={colIndex} letter={cell} />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Board;
