import React, {useState} from 'react';
import './App.css';
import Keyboard from './Components/jsx/Keyboard';
import Board from './Components/jsx/Board';

const App = () => {

  const [letter, setLetter] = useState('');
  const [keyPressCount, setKeyPressCount] = useState(0);

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
