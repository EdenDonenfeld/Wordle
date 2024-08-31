import React from "react";
import Letter from "./Letter";
import '../css/Keyboard.css';

const Keyboard = ({ onKeyPress }) => {

    const firstRowLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const secondRowLetters = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const thirdRowLetters = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

    return (
        <div className="keyboard-container">
            <div className="first-row">
                {firstRowLetters.map((letter, index) => {
                    return <Letter key={index} letter={letter} onClick={onKeyPress} />
                })}
            </div>
            <div className="second-row">
                {secondRowLetters.map((letter, index) => {
                    return <Letter key={index} letter={letter} onClick={onKeyPress} />
                })}
            </div>
            <div className="third-row">
                <Letter letter="Enter" onClick={onKeyPress} />
                {thirdRowLetters.map((letter, index) => {
                    return <Letter key={index} letter={letter} onClick={onKeyPress} />
                })}
                <Letter letter="Del" onClick={onKeyPress} />
            </div>
        </div>
    );
}

export default Keyboard;