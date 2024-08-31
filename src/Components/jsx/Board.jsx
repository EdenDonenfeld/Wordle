import React, { useState, useEffect } from "react";
import Cell from "./Cell";
import '../css/Board.css';

const Board = ({ letter, keyPressCount }) => {
    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(5).fill('')));
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCol, setCurrentCol] = useState(0);

    useEffect(() => {
        if (letter) {
            if (letter === 'Enter') {
                handleEnter();
            } else if (letter === 'Del') {
                handleDelete();
            } else {
                handleLetterInput(letter);
            }
        }
    }, [keyPressCount]); // eslint-disable-line react-hooks/exhaustive-deps


    const handleEnter = () => {
        console.log("Current row: ", currentRow);
        console.log("Current col: ", currentCol);
        if (currentCol < 5) {
            console.log("Please fill the entire row before moving to the next row");
        } else {
            setCurrentCol(0);
            setCurrentRow(currentRow + 1);
        }
    }


    const handleDelete = () => {
        if (currentCol > 0) {
            const newBoard = [...board];
            let newRow = currentRow;
            let newCol = currentCol;
            newCol -= 1;
            
            newBoard[newRow][newCol] = '';
            setBoard(newBoard);
            setCurrentCol(newCol);
            setCurrentRow(newRow);
        }
    };

    const handleLetterInput = (inputLetter) => {
        if (currentCol < 5 && currentRow < 6) {
            const newBoard = [...board];
            newBoard[currentRow][currentCol] = inputLetter;
            setBoard(newBoard);

            if (currentCol < 5) {
                setCurrentCol(currentCol + 1);
            }
        }
    };

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
