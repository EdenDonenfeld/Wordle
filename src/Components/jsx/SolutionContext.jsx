import React, { createContext, useState, useEffect, useRef } from 'react';
import { loadWords } from './LoadWords';

export const SolutionContext = createContext();

export const SolutionProvider = (props) => {
    const [solution, setSolution] = useState('');
    const [validGuesses, setValidGuesses] = useState([]);
    const [validSolutions, setValidSolutions] = useState([]);

    const solutionRef = useRef(solution);

    useEffect(() => {
        if (!solutionRef.current) {
          const fetchWords = async () => {
            const { validGuesses, validSolutions } = await loadWords();
            setValidGuesses(validGuesses);
            setValidSolutions(validSolutions);
            const randomIndex = Math.floor(Math.random() * validSolutions.length);
            const selectedSolution = validSolutions[randomIndex];
            setSolution(selectedSolution);
            console.log(selectedSolution);
          };
          fetchWords();
          solutionRef.current = true;  // Mark words as fetched
        }
    }, []);

    return (
        <SolutionContext.Provider value={{ solution, validGuesses, validSolutions }}>
            {props.children}
        </SolutionContext.Provider>
    );
}