import React, { useState, useEffect } from 'react';
import './App.css';
import Keyboard from './Components/jsx/Keyboard';
import Board from './Components/jsx/Board';
import { SolutionProvider } from './Components/jsx/SolutionContext';
import { BoardProvider } from './Components/jsx/BoardContext';

const App = () => {
    const [letter, setLetter] = useState('');
    const [keyPressCount, setKeyPressCount] = useState(0);

    const logLetter = (letter) => {
        setLetter(letter);
        setKeyPressCount(keyPressCount + 1);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            if (key >= 'a' && key <= 'z') {
                setLetter(key.toUpperCase());
                setKeyPressCount(keyPressCount + 1);
            } else if (key === 'Enter') {
                setLetter('Enter');
                setKeyPressCount(keyPressCount + 1);
            } else if (key === 'Backspace') {
                setLetter('Del');
                setKeyPressCount(keyPressCount + 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [keyPressCount]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <SolutionProvider>
            <BoardProvider>
                <div className="App">
                    <h1 className="header">Unlimitied Wordle</h1>
                    <Board letter={letter} keyPressCount={keyPressCount} />
                    <Keyboard onKeyPress={logLetter} />
                </div>
            </BoardProvider>
        </SolutionProvider>
    );
};

export default App;
