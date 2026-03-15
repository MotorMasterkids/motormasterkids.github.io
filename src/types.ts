export type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Complex' | 'Expert';

export interface Point {
  x: number;
  y: number;
}

export interface TracingTemplate {
  id: string;
  name: string;
  category: 'Shapes' | 'Animals' | 'Patterns' | 'Nature' | 'Space' | 'Food' | 'Objects' | 'Vehicles';
  difficulty: Difficulty;
  points: Point[];
  isClosed?: boolean;
}

export interface AppState {
  difficulty: Difficulty;
}
