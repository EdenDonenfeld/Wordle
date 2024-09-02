import React, { useContext, useState, useEffect } from "react";
import Letter from "./Letter";
import '../css/Keyboard.css';
import { BoardContext } from "./BoardContext";

const Keyboard = ({ onKeyPress }) => {

    const firstRowLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secondRowLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const thirdRowLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    const { board, setBoard } = useContext(BoardContext); // eslint-disable-line no-unused-vars
    const [lettersColor, setLettersColor] = useState({});

    useEffect(() => {
        const newLettersColor = { ...lettersColor };

        board.forEach((row) => {
            row.forEach((cell) => {
                if (cell.letter !== '') {
                    const currentColor = newLettersColor[cell.letter] || '#d3d6da';
                    if (cell.color === '#6aaa64') {
                        newLettersColor[cell.letter] = "#6aaa64";
                    } else if (cell.color === '#c9b458' && currentColor !== '#6aaa64') {
                        newLettersColor[cell.letter] = "#c9b458";
                    } else if (cell.color === '#787c7e' && currentColor === '#d3d6da') {
                        newLettersColor[cell.letter] = "#787c7e";
                    }
                }
            });
        });

        setLettersColor(newLettersColor);
    }, [board]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="keyboard-container">
            <div className="first-row">
                {firstRowLetters.map((letter, index) => {
                    const color = lettersColor[letter] || '#d3d6da';
                    return <Letter key={index} letter={letter} color={color} onClick={onKeyPress} />
                })}
            </div>
            <div className="second-row">
                {secondRowLetters.map((letter, index) => {
                    const color = lettersColor[letter] || '#d3d6da';
                    return <Letter key={index} letter={letter} color={color} onClick={onKeyPress} />
                })}
            </div>
            <div className="third-row">
                <Letter letter="Enter" color="#d3d6da" onClick={onKeyPress} />
                {thirdRowLetters.map((letter, index) => {
                    const color = lettersColor[letter] || '#d3d6da';
                    return <Letter key={index} letter={letter} color={color} onClick={onKeyPress} />
                })}
                <Letter letter="Del" color="#d3d6da" onClick={onKeyPress} />
            </div>
        </div>
    );
}

export default Keyboard;