import React from 'react';
import '../css/Letter.css';

const Letter = ({ letter, onClick }) => {
    return (
      <button className="keyboard-btn"
        onClick={() => onClick(letter)} >
        {letter}
      </button>
    );
  }

export default Letter;