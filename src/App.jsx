import React, {useEffect, useState} from 'react';
import './App.css';
import Keyboard from './Components/jsx/Keyboard';
import Board from './Components/jsx/Board';
import { loadWords } from './LoadWords';

const App = () => {

  const [letter, setLetter] = useState('');
  const [keyPressCount, setKeyPressCount] = useState(0);
  const [solution, setSolution] = useState(''); // eslint-disable-line no-unused-vars
  const [validGuesses, setValidGuesses] = useState([]); // eslint-disable-line no-unused-vars
  const [validSolutions, setValidSolutions] = useState([]); // eslint-disable-line no-unused-vars

  useEffect(() => {
    const fetchWords = async () => {
      const { validGuesses, validSolutions } = await loadWords();
      setValidGuesses(validGuesses);
      setValidSolutions(validSolutions);
      const randomIndex = Math.floor(Math.random() * validSolutions.length);
      setSolution(validSolutions[randomIndex]);
      console.log("Solution: ", validSolutions[randomIndex]);
    };
    fetchWords();
  }, []);

 
  const logLetter = (letter) => {
    console.log(letter);
    setLetter(letter);
    setKeyPressCount(keyPressCount + 1);
  }

  return (
    <div className="App">
      <h1 className="header">Wordle</h1>
      <Board letter={letter} keyPressCount={keyPressCount} />
      <Keyboard onKeyPress={logLetter}/>
    </div>
  );
}

export default App;
