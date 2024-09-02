import React, { createContext, useState } from "react";

export const BoardContext = createContext();

export const BoardProvider = (props) => {
    const [board, setBoard] = useState(Array(6).fill(null).map(() => 
        Array(5).fill({ letter: '', color: 'white' })
    ));
    
    return (
        <BoardContext.Provider value={{ board, setBoard }}>
            {props.children}
        </BoardContext.Provider>
    );
} 
