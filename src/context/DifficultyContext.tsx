import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Difficulty } from '../types';

interface DifficultyContextType {
  difficulty: Difficulty;
  setDifficulty: (d: Difficulty) => void;
}

const DifficultyContext = createContext<DifficultyContextType | undefined>(undefined);

export const DifficultyProvider = ({ children }: { children: ReactNode }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('Easy');

  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyContext.Provider>
  );
};

export const useDifficulty = () => {
  const context = useContext(DifficultyContext);
  if (!context) {
    throw new Error('useDifficulty must be used within a DifficultyProvider');
  }
  return context;
};
