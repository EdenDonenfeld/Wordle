import React, { useState, useEffect, useContext } from 'react';
import Cell from './Cell';
import Notification from './Notification';
import '../css/Board.css';
import { SolutionContext } from './SolutionContext';
import { BoardContext } from './BoardContext';

const Board = ({ letter, keyPressCount }) => {
    const [currentRow, setCurrentRow] = useState(0);
    const [currentCol, setCurrentCol] = useState(0);
    const [notification, setNotification] = useState({
        message: '',
        visible: false,
    });
    const [finished, setFinished] = useState(false);

    const { board, setBoard } = useContext(BoardContext);
    const { solution, validGuesses, validSolutions } =
        useContext(SolutionContext);

    useEffect(() => {
        if (finished) {
            setCurrentRow(6);
            setCurrentCol(5);
        }
    }, [finished]);

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
        if (currentCol === 5) {
            const guess = board[currentRow].map((cell) => cell.letter);
            const word = guess.join('').toLowerCase();

            if (validGuesses.includes(word) || validSolutions.includes(word)) {
                const newBoard = board.map((row) =>
                    row.map((cell) => ({ ...cell }))
                );

                const solutionCount = {};
                solution.split('').forEach((letter) => {
                    solutionCount[letter] = solutionCount[letter]
                        ? solutionCount[letter] + 1
                        : 1;
                });

                guess.forEach((letter, index) => {
                    letter = letter.toLowerCase();
                    if (solution[index] === letter) {
                        newBoard[currentRow][index].color = '#6aaa64'; // green
                        solutionCount[letter] -= 1;
                    }
                });

                guess.forEach((letter, index) => {
                    letter = letter.toLowerCase();
                    if (newBoard[currentRow][index].color !== '#6aaa64') {
                        // If not green
                        if (
                            solutionCount[letter] &&
                            solutionCount[letter] > 0
                        ) {
                            newBoard[currentRow][index].color = '#c9b458'; // yellow
                            solutionCount[letter] -= 1;
                        } else {
                            newBoard[currentRow][index].color = '#787c7e'; // grey
                        }
                    }
                });

                setBoard(newBoard);

                if (word === solution) {
                    setFinished(true);
                    let winMessage = '';
                    switch (currentRow) {
                        case 0:
                            winMessage = 'Genius';
                            break;
                        case 1:
                            winMessage = 'Magnificent';
                            break;
                        case 2:
                            winMessage = 'Impressive';
                            break;
                        case 3:
                            winMessage = 'Splendid';
                            break;
                        case 4:
                            winMessage = 'Great';
                            break;
                        case 5:
                            winMessage = 'Phew';
                            break;
                        default:
                            break;
                    }
                    showNotfication(winMessage);
                } else if (currentRow === 5) {
                    showNotfication(solution.toUpperCase());
                    setFinished(true);
                    return;
                }

                setCurrentCol(0);
                setCurrentRow(currentRow + 1);
            } else {
                showNotfication('Not in word list');
            }
        } else {
            showNotfication('Not enough letters');
        }
    };

    const handleDelete = () => {
        if (currentCol > 0) {
            const newBoard = [...board];
            let newRow = currentRow;
            let newCol = currentCol;
            newCol -= 1;

            newBoard[newRow][newCol].letter = '';
            newBoard[newRow][newCol].color = 'white';
            setBoard(newBoard);
            setCurrentCol(newCol);
            setCurrentRow(newRow);
        }
    };

    const handleLetterInput = (inputLetter) => {
        if (currentCol < 5 && currentRow < 6) {
            const newBoard = board.map((row) =>
                row.map((cell) => ({ ...cell }))
            );
            newBoard[currentRow][currentCol].letter = inputLetter;
            setBoard(newBoard);

            if (currentCol < 5) {
                setCurrentCol(currentCol + 1);
            }
        }
    };

    const showNotfication = (message) => {
        setNotification({ message: message, visible: true });
        setTimeout(() => {
            setNotification({ message: '', visible: false });
        }, 3000);
    };

    return (
        <div className="words-container">
            <Notification
                message={notification.message}
                visible={notification.visible}
            />
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Cell
                            key={colIndex}
                            letter={cell.letter}
                            color={cell.color}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
