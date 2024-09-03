import React from 'react';
import '../css/Letter.css';

const Letter = ({ letter, color, onClick }) => {

    const letterStyle = {
      backgroundColor: color,
      color: color === '#d3d6da' ? 'black' : 'white'
    };

    return (
      <button
        className="keyboard-btn"
        style={letterStyle}
        id={letter === 'Enter' ? 'enter' : letter === 'Del' ? 'delete' : ''}
        onClick={() => onClick(letter)}>
          {letter}
      </button>
    );
  }

export default Letter;