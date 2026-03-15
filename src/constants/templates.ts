import { TracingTemplate, Point, Difficulty } from '../types';

const getLetterPoints = (letter: string): Point[] => {
  const points: Record<string, Point[]> = {
    'A': [{ x: 50, y: 20 }, { x: 20, y: 80 }, { x: 35, y: 50 }, { x: 65, y: 50 }, { x: 50, y: 20 }, { x: 80, y: 80 }],
    'B': [{ x: 30, y: 20 }, { x: 30, y: 80 }, { x: 60, y: 80 }, { x: 70, y: 65 }, { x: 60, y: 50 }, { x: 30, y: 50 }, { x: 60, y: 50 }, { x: 70, y: 35 }, { x: 60, y: 20 }, { x: 30, y: 20 }],
    'C': [{ x: 70, y: 30 }, { x: 50, y: 20 }, { x: 30, y: 30 }, { x: 20, y: 50 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 70 }],
    'D': [{ x: 30, y: 20 }, { x: 30, y: 80 }, { x: 60, y: 80 }, { x: 75, y: 50 }, { x: 60, y: 20 }, { x: 30, y: 20 }],
    'E': [{ x: 70, y: 20 }, { x: 30, y: 20 }, { x: 30, y: 50 }, { x: 60, y: 50 }, { x: 30, y: 50 }, { x: 30, y: 80 }, { x: 70, y: 80 }],
    'F': [{ x: 70, y: 20 }, { x: 30, y: 20 }, { x: 30, y: 50 }, { x: 60, y: 50 }, { x: 30, y: 50 }, { x: 30, y: 80 }],
    'G': [{ x: 70, y: 30 }, { x: 50, y: 20 }, { x: 30, y: 30 }, { x: 20, y: 50 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 70 }, { x: 70, y: 50 }, { x: 50, y: 50 }],
    'H': [{ x: 30, y: 20 }, { x: 30, y: 80 }, { x: 30, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 20 }, { x: 70, y: 80 }],
    'I': [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 50, y: 20 }, { x: 50, y: 80 }, { x: 30, y: 80 }, { x: 70, y: 80 }],
    'J': [{ x: 60, y: 20 }, { x: 60, y: 70 }, { x: 50, y: 80 }, { x: 30, y: 70 }],
    'K': [{ x: 30, y: 20 }, { x: 30, y: 80 }, { x: 30, y: 50 }, { x: 70, y: 20 }, { x: 30, y: 50 }, { x: 70, y: 80 }],
    'L': [{ x: 30, y: 20 }, { x: 30, y: 80 }, { x: 70, y: 80 }],
    'M': [{ x: 20, y: 80 }, { x: 20, y: 20 }, { x: 50, y: 50 }, { x: 80, y: 20 }, { x: 80, y: 80 }],
    'N': [{ x: 25, y: 80 }, { x: 25, y: 20 }, { x: 75, y: 80 }, { x: 75, y: 20 }],
    'O': [{ x: 50, y: 20 }, { x: 75, y: 35 }, { x: 75, y: 65 }, { x: 50, y: 80 }, { x: 25, y: 65 }, { x: 25, y: 35 }, { x: 50, y: 20 }],
    'P': [{ x: 30, y: 80 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 70, y: 35 }, { x: 60, y: 50 }, { x: 30, y: 50 }],
    'Q': [{ x: 50, y: 20 }, { x: 75, y: 35 }, { x: 75, y: 65 }, { x: 50, y: 80 }, { x: 25, y: 65 }, { x: 25, y: 35 }, { x: 50, y: 20 }, { x: 60, y: 60 }, { x: 80, y: 85 }],
    'R': [{ x: 30, y: 80 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 70, y: 35 }, { x: 60, y: 50 }, { x: 30, y: 50 }, { x: 70, y: 80 }],
    'S': [{ x: 70, y: 30 }, { x: 50, y: 20 }, { x: 30, y: 35 }, { x: 50, y: 50 }, { x: 70, y: 65 }, { x: 50, y: 80 }, { x: 30, y: 70 }],
    'T': [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 50, y: 20 }, { x: 50, y: 80 }],
    'U': [{ x: 30, y: 20 }, { x: 30, y: 70 }, { x: 50, y: 80 }, { x: 70, y: 70 }, { x: 70, y: 20 }],
    'V': [{ x: 20, y: 20 }, { x: 50, y: 80 }, { x: 80, y: 20 }],
    'W': [{ x: 20, y: 20 }, { x: 35, y: 80 }, { x: 50, y: 50 }, { x: 65, y: 80 }, { x: 80, y: 20 }],
    'X': [{ x: 25, y: 20 }, { x: 75, y: 80 }, { x: 50, y: 50 }, { x: 75, y: 20 }, { x: 25, y: 80 }],
    'Y': [{ x: 25, y: 20 }, { x: 50, y: 50 }, { x: 75, y: 20 }, { x: 50, y: 50 }, { x: 50, y: 80 }],
    'Z': [{ x: 25, y: 20 }, { x: 75, y: 20 }, { x: 25, y: 80 }, { x: 75, y: 80 }]
  };
  return points[letter] || [];
};

const getNumberPoints = (num: string): Point[] => {
  const points: Record<string, Point[]> = {
    '0': [{ x: 50, y: 20 }, { x: 75, y: 35 }, { x: 75, y: 65 }, { x: 50, y: 80 }, { x: 25, y: 65 }, { x: 25, y: 35 }, { x: 50, y: 20 }],
    '1': [{ x: 40, y: 30 }, { x: 50, y: 20 }, { x: 50, y: 80 }],
    '2': [{ x: 30, y: 30 }, { x: 50, y: 20 }, { x: 70, y: 30 }, { x: 70, y: 50 }, { x: 30, y: 80 }, { x: 70, y: 80 }],
    '3': [{ x: 30, y: 25 }, { x: 70, y: 25 }, { x: 50, y: 50 }, { x: 70, y: 75 }, { x: 30, y: 75 }],
    '4': [{ x: 60, y: 80 }, { x: 60, y: 20 }, { x: 20, y: 60 }, { x: 80, y: 60 }],
    '5': [{ x: 70, y: 20 }, { x: 30, y: 20 }, { x: 30, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 80 }, { x: 30, y: 80 }],
    '6': [{ x: 70, y: 20 }, { x: 30, y: 50 }, { x: 30, y: 80 }, { x: 70, y: 80 }, { x: 70, y: 50 }, { x: 30, y: 50 }],
    '7': [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 40, y: 80 }],
    '8': [{ x: 50, y: 50 }, { x: 30, y: 35 }, { x: 50, y: 20 }, { x: 70, y: 35 }, { x: 50, y: 50 }, { x: 30, y: 65 }, { x: 50, y: 80 }, { x: 70, y: 65 }, { x: 50, y: 50 }],
    '9': [{ x: 70, y: 50 }, { x: 30, y: 50 }, { x: 30, y: 20 }, { x: 70, y: 20 }, { x: 70, y: 80 }]
  };
  return points[num] || [];
};

const generateSpiral = (id: string, name: string, turns: number, difficulty: Difficulty): TracingTemplate => ({
  id,
  name,
  category: 'Patterns',
  difficulty,
  isClosed: false,
  points: Array.from({ length: 20 + Math.floor(turns * 10) }, (_, i) => {
    const angle = (i / (20 + Math.floor(turns * 10))) * Math.PI * 2 * turns;
    const radius = 10 + (i / (20 + Math.floor(turns * 10))) * 40;
    return {
      x: 50 + Math.cos(angle) * radius,
      y: 50 + Math.sin(angle) * radius
    };
  })
});

const generatePolygon = (id: string, name: string, sides: number, difficulty: Difficulty): TracingTemplate => ({
  id,
  name,
  category: 'Shapes',
  difficulty,
  isClosed: true,
  points: Array.from({ length: sides }, (_, i) => {
    const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
    return {
      x: 50 + Math.cos(angle) * 35,
      y: 50 + Math.sin(angle) * 35
    };
  })
});

const baseTemplates: TracingTemplate[] = [
  // SHAPES
  { id: 'circle', name: 'Circle', category: 'Shapes', difficulty: 'Easy', isClosed: true, points: Array.from({ length: 12 }, (_, i) => ({ x: 50 + Math.cos((i / 12) * Math.PI * 2) * 35, y: 50 + Math.sin((i / 12) * Math.PI * 2) * 35 })) },
  { id: 'square', name: 'Square', category: 'Shapes', difficulty: 'Easy', isClosed: true, points: [{ x: 25, y: 25 }, { x: 75, y: 25 }, { x: 75, y: 75 }, { x: 25, y: 75 }] },
  { id: 'triangle', name: 'Triangle', category: 'Shapes', difficulty: 'Easy', isClosed: true, points: [{ x: 50, y: 20 }, { x: 80, y: 80 }, { x: 20, y: 80 }] },
  { id: 'star', name: 'Star', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 10 }, { x: 61, y: 35 }, { x: 88, y: 35 }, { x: 66, y: 52 }, { x: 75, y: 78 }, { x: 50, y: 62 }, { x: 25, y: 78 }, { x: 34, y: 52 }, { x: 12, y: 35 }, { x: 39, y: 35 }] },
  { id: 'heart', name: 'Heart', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 30 }, { x: 65, y: 15 }, { x: 85, y: 20 }, { x: 90, y: 45 }, { x: 50, y: 85 }, { x: 10, y: 45 }, { x: 15, y: 20 }, { x: 35, y: 15 }] },
  { id: 'parallelogram', name: 'Parallelogram', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 30 }, { x: 80, y: 30 }, { x: 70, y: 70 }, { x: 20, y: 70 }] },
  { id: 'rhombus', name: 'Rhombus', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 20 }, { x: 80, y: 50 }, { x: 50, y: 80 }, { x: 20, y: 50 }] },
  { id: 'trapezoid', name: 'Trapezoid', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 35, y: 30 }, { x: 65, y: 30 }, { x: 85, y: 70 }, { x: 15, y: 70 }] },
  { id: 'kite', name: 'Kite Shape', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 15 }, { x: 80, y: 45 }, { x: 50, y: 85 }, { x: 20, y: 45 }] },
  { id: 'pentagon-manual', name: 'Pentagon', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 15 }, { x: 85, y: 40 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 15, y: 40 }] },
  { id: 'hexagon-manual', name: 'Hexagon', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 15 }, { x: 80, y: 30 }, { x: 80, y: 70 }, { x: 50, y: 85 }, { x: 20, y: 70 }, { x: 20, y: 30 }] },
  { id: 'arrow-right', name: 'Arrow', category: 'Shapes', difficulty: 'Easy', isClosed: true, points: [{ x: 20, y: 40 }, { x: 60, y: 40 }, { x: 60, y: 20 }, { x: 85, y: 50 }, { x: 60, y: 80 }, { x: 60, y: 60 }, { x: 20, y: 60 }] },
  { id: 'moon-manual', name: 'Crescent Moon', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 40, y: 20 }, { x: 60, y: 30 }, { x: 70, y: 50 }, { x: 60, y: 70 }, { x: 40, y: 80 }, { x: 55, y: 70 }, { x: 65, y: 50 }, { x: 55, y: 30 }] },
  { id: 'shield', name: 'Shield', category: 'Shapes', difficulty: 'Hard', isClosed: true, points: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 60 }, { x: 50, y: 85 }, { x: 20, y: 60 }] },
  { id: 'drop', name: 'Water Drop', category: 'Shapes', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 15 }, { x: 75, y: 55 }, { x: 70, y: 75 }, { x: 50, y: 85 }, { x: 30, y: 75 }, { x: 25, y: 55 }] },
  { id: 'leaf-manual', name: 'Leaf', category: 'Nature', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 15 }, { x: 80, y: 40 }, { x: 70, y: 85 }, { x: 50, y: 70 }, { x: 30, y: 85 }, { x: 20, y: 40 }] },
  { id: 'cross-manual', name: 'Plus Sign', category: 'Shapes', difficulty: 'Easy', isClosed: true, points: [{ x: 40, y: 20 }, { x: 60, y: 20 }, { x: 60, y: 40 }, { x: 80, y: 40 }, { x: 80, y: 60 }, { x: 60, y: 60 }, { x: 60, y: 80 }, { x: 40, y: 80 }, { x: 40, y: 60 }, { x: 20, y: 60 }, { x: 20, y: 40 }, { x: 40, y: 40 }] },
  
  // LETTERS A-Z (Medium)
  ...['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map(letter => ({
    id: `letter-${letter.toLowerCase()}`,
    name: `Letter ${letter}`,
    category: 'Shapes' as const,
    difficulty: 'Medium' as Difficulty,
    isClosed: ['A', 'B', 'D', 'O', 'P', 'Q', 'R'].includes(letter),
    points: getLetterPoints(letter)
  })),

  // NUMBERS 0-9 (Medium)
  ...['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map(num => ({
    id: `num-${num}`,
    name: `Number ${num}`,
    category: 'Shapes' as const,
    difficulty: 'Medium' as Difficulty,
    isClosed: ['0', '6', '8', '9'].includes(num),
    points: getNumberPoints(num)
  })),

  // ANIMALS
  { id: 'fish', name: 'Fish', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 50 }, { x: 40, y: 30 }, { x: 70, y: 30 }, { x: 90, y: 15 }, { x: 80, y: 50 }, { x: 90, y: 85 }, { x: 70, y: 70 }, { x: 40, y: 70 }] },
  { id: 'butterfly', name: 'Butterfly', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 20 }, { x: 70, y: 10 }, { x: 90, y: 30 }, { x: 70, y: 50 }, { x: 90, y: 70 }, { x: 70, y: 90 }, { x: 50, y: 80 }, { x: 30, y: 90 }, { x: 10, y: 70 }, { x: 30, y: 50 }, { x: 10, y: 30 }, { x: 30, y: 10 }] },
  { id: 'cat', name: 'Cat Face', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 30, y: 70 }, { x: 70, y: 70 }, { x: 70, y: 40 }, { x: 80, y: 20 }, { x: 60, y: 30 }, { x: 40, y: 30 }, { x: 20, y: 20 }, { x: 30, y: 40 }] },
  { id: 'bird', name: 'Little Bird', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 40 }, { x: 40, y: 20 }, { x: 60, y: 20 }, { x: 80, y: 40 }, { x: 90, y: 35 }, { x: 80, y: 60 }, { x: 60, y: 80 }, { x: 40, y: 80 }, { x: 20, y: 60 }] },
  { id: 'rat', name: 'Little Rat', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 60 }, { x: 50, y: 50 }, { x: 70, y: 60 }, { x: 85, y: 55 }, { x: 70, y: 75 }, { x: 30, y: 75 }, { x: 20, y: 65 }, { x: 25, y: 55 }] },
  { id: 'rabbit', name: 'Rabbit', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 40, y: 80 }, { x: 60, y: 80 }, { x: 70, y: 60 }, { x: 80, y: 40 }, { x: 70, y: 20 }, { x: 60, y: 40 }, { x: 50, y: 30 }, { x: 40, y: 40 }, { x: 30, y: 20 }, { x: 20, y: 40 }, { x: 30, y: 60 }] },
  { id: 'elephant', name: 'Elephant', category: 'Animals', difficulty: 'Complex', isClosed: true, points: [{ x: 20, y: 80 }, { x: 20, y: 40 }, { x: 40, y: 20 }, { x: 70, y: 20 }, { x: 85, y: 40 }, { x: 85, y: 70 }, { x: 75, y: 80 }, { x: 65, y: 80 }, { x: 65, y: 60 }, { x: 55, y: 60 }, { x: 55, y: 80 }, { x: 45, y: 80 }, { x: 45, y: 60 }, { x: 35, y: 60 }, { x: 35, y: 80 }] },
  { id: 'dinosaur', name: 'T-Rex Skeleton', category: 'Animals', difficulty: 'Expert', isClosed: true, points: [{ x: 10, y: 70 }, { x: 30, y: 70 }, { x: 35, y: 85 }, { x: 45, y: 85 }, { x: 40, y: 70 }, { x: 60, y: 70 }, { x: 70, y: 50 }, { x: 85, y: 40 }, { x: 95, y: 20 }, { x: 80, y: 15 }, { x: 65, y: 30 }, { x: 55, y: 25 }, { x: 40, y: 35 }, { x: 25, y: 45 }, { x: 15, y: 55 }] },
  
  // EXPERT MASTERPIECES
  { id: 'mandala', name: 'Zen Mandala', category: 'Patterns', difficulty: 'Expert', isClosed: true, points: Array.from({ length: 32 }, (_, i) => {
    const angle = (i / 32) * Math.PI * 2;
    const r = i % 2 === 0 ? 45 : (i % 4 === 1 ? 35 : 25);
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'phoenix', name: 'Fire Phoenix', category: 'Animals', difficulty: 'Expert', isClosed: true, points: [{ x: 50, y: 30 }, { x: 60, y: 20 }, { x: 80, y: 10 }, { x: 70, y: 30 }, { x: 90, y: 40 }, { x: 70, y: 50 }, { x: 85, y: 70 }, { x: 60, y: 65 }, { x: 50, y: 90 }, { x: 40, y: 65 }, { x: 15, y: 70 }, { x: 30, y: 50 }, { x: 10, y: 40 }, { x: 30, y: 30 }, { x: 20, y: 10 }, { x: 40, y: 20 }] },
  { id: 'snowflake', name: 'Ice Crystal', category: 'Nature', difficulty: 'Expert', isClosed: true, points: Array.from({ length: 24 }, (_, i) => {
    const angle = (i / 24) * Math.PI * 2;
    const r = i % 4 === 0 ? 45 : (i % 2 === 0 ? 30 : 15);
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'spider-web', name: 'Spider Web', category: 'Patterns', difficulty: 'Expert', isClosed: false, points: Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 8) * Math.PI * 2;
    const r = (Math.floor(i / 8) + 1) * 10;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'labyrinth', name: 'Ancient Labyrinth', category: 'Patterns', difficulty: 'Expert', isClosed: false, points: Array.from({ length: 30 }, (_, i) => {
    const angle = (i / 30) * Math.PI * 8;
    const r = 5 + (i / 30) * 40;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'circuit', name: 'Tech Circuit', category: 'Patterns', difficulty: 'Expert', isClosed: false, points: [{ x: 10, y: 10 }, { x: 30, y: 10 }, { x: 30, y: 30 }, { x: 50, y: 30 }, { x: 50, y: 10 }, { x: 70, y: 10 }, { x: 70, y: 50 }, { x: 90, y: 50 }, { x: 90, y: 90 }, { x: 50, y: 90 }, { x: 50, y: 70 }, { x: 10, y: 70 }, { x: 10, y: 40 }, { x: 30, y: 40 }] },
  { id: 'giraffe', name: 'Tall Giraffe', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 40, y: 90 }, { x: 60, y: 90 }, { x: 60, y: 50 }, { x: 80, y: 30 }, { x: 70, y: 10 }, { x: 50, y: 10 }, { x: 40, y: 30 }, { x: 40, y: 50 }] },
  { id: 'penguin', name: 'Cool Penguin', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 40, y: 85 }, { x: 60, y: 85 }, { x: 70, y: 60 }, { x: 65, y: 30 }, { x: 50, y: 15 }, { x: 35, y: 30 }, { x: 30, y: 60 }] },
  { id: 'whale', name: 'Big Whale', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 10, y: 50 }, { x: 30, y: 30 }, { x: 70, y: 30 }, { x: 90, y: 20 }, { x: 85, y: 50 }, { x: 90, y: 80 }, { x: 70, y: 70 }, { x: 30, y: 70 }] },
  { id: 'snake-manual', name: 'Wiggly Snake', category: 'Animals', difficulty: 'Easy', isClosed: false, points: [{ x: 10, y: 50 }, { x: 25, y: 30 }, { x: 40, y: 50 }, { x: 55, y: 70 }, { x: 70, y: 50 }, { x: 85, y: 30 }] },
  
  // NATURE
  { id: 'sun', name: 'Happy Sun', category: 'Nature', difficulty: 'Easy', isClosed: true, points: Array.from({ length: 12 }, (_, i) => {
    const angle = (i / 12) * Math.PI * 2;
    const r = i % 2 === 0 ? 35 : 25;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'tree', name: 'Pine Tree', category: 'Nature', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 10 }, { x: 70, y: 40 }, { x: 60, y: 40 }, { x: 80, y: 70 }, { x: 20, y: 70 }, { x: 40, y: 40 }, { x: 30, y: 40 }] },
  { id: 'cloud', name: 'Fluffy Cloud', category: 'Nature', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 60 }, { x: 30, y: 40 }, { x: 50, y: 30 }, { x: 70, y: 40 }, { x: 80, y: 60 }, { x: 70, y: 80 }, { x: 30, y: 80 }] },

  // PATTERNS
  { id: 'castle', name: 'Castle', category: 'Patterns', difficulty: 'Complex', isClosed: true, points: [{ x: 20, y: 80 }, { x: 20, y: 40 }, { x: 15, y: 40 }, { x: 25, y: 20 }, { x: 35, y: 40 }, { x: 30, y: 40 }, { x: 30, y: 50 }, { x: 40, y: 50 }, { x: 40, y: 30 }, { x: 35, y: 30 }, { x: 50, y: 10 }, { x: 65, y: 30 }, { x: 60, y: 30 }, { x: 60, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 40 }, { x: 65, y: 40 }, { x: 75, y: 20 }, { x: 85, y: 40 }, { x: 80, y: 40 }, { x: 80, y: 80 }, { x: 55, y: 80 }, { x: 55, y: 65 }, { x: 45, y: 65 }, { x: 45, y: 80 }] },
  { id: 'rocket', name: 'Rocket Ship', category: 'Patterns', difficulty: 'Complex', isClosed: true, points: [{ x: 50, y: 10 }, { x: 65, y: 30 }, { x: 65, y: 70 }, { x: 80, y: 85 }, { x: 65, y: 85 }, { x: 65, y: 95 }, { x: 50, y: 85 }, { x: 35, y: 95 }, { x: 35, y: 85 }, { x: 20, y: 85 }, { x: 35, y: 70 }, { x: 35, y: 30 }] },
  { id: 'dragon', name: 'Mythical Dragon', category: 'Patterns', difficulty: 'Expert', isClosed: true, points: [{ x: 50, y: 20 }, { x: 55, y: 15 }, { x: 60, y: 20 }, { x: 65, y: 15 }, { x: 70, y: 20 }, { x: 80, y: 30 }, { x: 85, y: 40 }, { x: 80, y: 50 }, { x: 70, y: 55 }, { x: 60, y: 50 }, { x: 55, y: 60 }, { x: 60, y: 70 }, { x: 70, y: 80 }, { x: 80, y: 85 }, { x: 90, y: 80 }, { x: 85, y: 90 }, { x: 70, y: 95 }, { x: 50, y: 90 }, { x: 30, y: 95 }, { x: 15, y: 90 }, { x: 10, y: 80 }, { x: 20, y: 85 }, { x: 30, y: 80 }, { x: 40, y: 70 }, { x: 45, y: 60 }, { x: 40, y: 50 }, { x: 30, y: 55 }, { x: 20, y: 50 }, { x: 15, y: 40 }, { x: 20, y: 30 }, { x: 30, y: 20 }, { x: 35, y: 15 }, { x: 40, y: 20 }, { x: 45, y: 15 }] },

  // SPACE (10)
  { id: 'saturn', name: 'Saturn', category: 'Space', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 30 }, { x: 70, y: 35 }, { x: 90, y: 50 }, { x: 70, y: 65 }, { x: 50, y: 70 }, { x: 30, y: 65 }, { x: 10, y: 50 }, { x: 30, y: 35 }] },
  { id: 'ufo', name: 'UFO', category: 'Space', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 40 }, { x: 40, y: 25 }, { x: 60, y: 25 }, { x: 70, y: 40 }, { x: 90, y: 55 }, { x: 50, y: 70 }, { x: 10, y: 55 }] },
  { id: 'telescope', name: 'Telescope', category: 'Space', difficulty: 'Hard', isClosed: true, points: [{ x: 20, y: 20 }, { x: 60, y: 40 }, { x: 55, y: 50 }, { x: 15, y: 30 }, { x: 40, y: 45 }, { x: 40, y: 80 }, { x: 50, y: 80 }, { x: 50, y: 45 }] },
  { id: 'alien', name: 'Alien Head', category: 'Space', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 15 }, { x: 80, y: 35 }, { x: 75, y: 75 }, { x: 50, y: 90 }, { x: 25, y: 75 }, { x: 20, y: 35 }] },
  { id: 'comet', name: 'Comet', category: 'Space', difficulty: 'Medium', isClosed: false, points: [{ x: 80, y: 20 }, { x: 70, y: 30 }, { x: 50, y: 50 }, { x: 30, y: 60 }, { x: 10, y: 65 }, { x: 30, y: 75 }, { x: 50, y: 85 }] },
  { id: 'shuttle', name: 'Space Shuttle', category: 'Space', difficulty: 'Complex', isClosed: true, points: [{ x: 50, y: 10 }, { x: 60, y: 30 }, { x: 60, y: 70 }, { x: 80, y: 80 }, { x: 50, y: 80 }, { x: 20, y: 80 }, { x: 40, y: 70 }, { x: 40, y: 30 }] },
  { id: 'moon-full', name: 'Full Moon', category: 'Space', difficulty: 'Easy', isClosed: true, points: Array.from({ length: 16 }, (_, i) => ({ x: 50 + Math.cos((i / 16) * Math.PI * 2) * 35, y: 50 + Math.sin((i / 16) * Math.PI * 2) * 35 })) },
  { id: 'constellation', name: 'Big Dipper', category: 'Space', difficulty: 'Medium', isClosed: false, points: [{ x: 20, y: 30 }, { x: 40, y: 35 }, { x: 55, y: 50 }, { x: 70, y: 55 }, { x: 85, y: 55 }, { x: 85, y: 75 }, { x: 70, y: 75 }, { x: 70, y: 55 }] },
  { id: 'black-hole', name: 'Black Hole', category: 'Space', difficulty: 'Expert', isClosed: false, points: Array.from({ length: 40 }, (_, i) => {
    const angle = (i / 40) * Math.PI * 10;
    const r = 5 + (i / 40) * 40;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'astronaut', name: 'Helmet', category: 'Space', difficulty: 'Hard', isClosed: true, points: [{ x: 25, y: 25 }, { x: 75, y: 25 }, { x: 85, y: 50 }, { x: 75, y: 85 }, { x: 25, y: 85 }, { x: 15, y: 50 }] },

  // FOOD (15)
  { id: 'apple', name: 'Apple', category: 'Food', difficulty: 'Easy', isClosed: true, points: [{ x: 50, y: 30 }, { x: 70, y: 25 }, { x: 85, y: 45 }, { x: 75, y: 80 }, { x: 50, y: 85 }, { x: 25, y: 80 }, { x: 15, y: 45 }, { x: 30, y: 25 }] },
  { id: 'pizza', name: 'Pizza Slice', category: 'Food', difficulty: 'Easy', isClosed: true, points: [{ x: 50, y: 85 }, { x: 20, y: 20 }, { x: 80, y: 20 }] },
  { id: 'burger', name: 'Burger', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 50 }, { x: 80, y: 50 }, { x: 80, y: 70 }, { x: 20, y: 70 }, { x: 20, y: 50 }, { x: 30, y: 30 }, { x: 70, y: 30 }, { x: 80, y: 50 }] },
  { id: 'ice-cream', name: 'Ice Cream', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 90 }, { x: 30, y: 50 }, { x: 70, y: 50 }, { x: 50, y: 90 }, { x: 30, y: 50 }, { x: 30, y: 30 }, { x: 50, y: 15 }, { x: 70, y: 30 }, { x: 70, y: 50 }] },
  { id: 'donut', name: 'Donut', category: 'Food', difficulty: 'Medium', isClosed: true, points: Array.from({ length: 16 }, (_, i) => ({ x: 50 + Math.cos((i / 16) * Math.PI * 2) * 35, y: 50 + Math.sin((i / 16) * Math.PI * 2) * 35 })) },
  { id: 'carrot', name: 'Carrot', category: 'Food', difficulty: 'Easy', isClosed: true, points: [{ x: 80, y: 20 }, { x: 20, y: 80 }, { x: 30, y: 90 }, { x: 90, y: 30 }] },
  { id: 'banana', name: 'Banana', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 20 }, { x: 50, y: 50 }, { x: 80, y: 80 }, { x: 70, y: 90 }, { x: 40, y: 60 }, { x: 10, y: 30 }] },
  { id: 'cookie', name: 'Cookie', category: 'Food', difficulty: 'Easy', isClosed: true, points: Array.from({ length: 12 }, (_, i) => ({ x: 50 + Math.cos((i / 12) * Math.PI * 2) * 30, y: 50 + Math.sin((i / 12) * Math.PI * 2) * 30 })) },
  { id: 'taco', name: 'Taco', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 10, y: 60 }, { x: 50, y: 20 }, { x: 90, y: 60 }, { x: 80, y: 80 }, { x: 20, y: 80 }] },
  { id: 'sushi', name: 'Sushi Roll', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 70, y: 70 }, { x: 30, y: 70 }] },
  { id: 'egg', name: 'Fried Egg', category: 'Food', difficulty: 'Easy', isClosed: true, points: [{ x: 30, y: 40 }, { x: 50, y: 20 }, { x: 80, y: 40 }, { x: 70, y: 80 }, { x: 40, y: 70 }] },
  { id: 'cupcake', name: 'Cupcake', category: 'Food', difficulty: 'Hard', isClosed: true, points: [{ x: 30, y: 80 }, { x: 70, y: 80 }, { x: 80, y: 50 }, { x: 20, y: 50 }, { x: 30, y: 30 }, { x: 50, y: 15 }, { x: 70, y: 30 }, { x: 80, y: 50 }] },
  { id: 'watermelon', name: 'Watermelon', category: 'Food', difficulty: 'Easy', isClosed: true, points: [{ x: 10, y: 40 }, { x: 90, y: 40 }, { x: 50, y: 85 }] },
  { id: 'bread', name: 'Bread Loaf', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 70 }, { x: 20, y: 40 }, { x: 35, y: 20 }, { x: 65, y: 20 }, { x: 80, y: 40 }, { x: 80, y: 70 }, { x: 20, y: 70 }] },
  { id: 'cherry', name: 'Cherries', category: 'Food', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 70 }, { x: 45, y: 70 }, { x: 45, y: 55 }, { x: 30, y: 55 }, { x: 30, y: 70 }, { x: 60, y: 30 }, { x: 75, y: 70 }, { x: 90, y: 70 }, { x: 90, y: 55 }, { x: 75, y: 55 }, { x: 75, y: 70 }] },

  // OBJECTS (15)
  { id: 'house', name: 'House', category: 'Objects', difficulty: 'Easy', isClosed: true, points: [{ x: 20, y: 80 }, { x: 80, y: 80 }, { x: 80, y: 50 }, { x: 50, y: 20 }, { x: 20, y: 50 }] },
  { id: 'car', name: 'Simple Car', category: 'Objects', difficulty: 'Medium', isClosed: true, points: [{ x: 10, y: 70 }, { x: 90, y: 70 }, { x: 90, y: 50 }, { x: 70, y: 50 }, { x: 60, y: 30 }, { x: 30, y: 30 }, { x: 20, y: 50 }, { x: 10, y: 50 }] },
  { id: 'boat', name: 'Sailboat', category: 'Objects', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 70 }, { x: 80, y: 70 }, { x: 70, y: 90 }, { x: 30, y: 90 }, { x: 20, y: 70 }, { x: 50, y: 70 }, { x: 50, y: 20 }, { x: 80, y: 70 }] },
  { id: 'key', name: 'Key', category: 'Objects', difficulty: 'Hard', isClosed: true, points: [{ x: 20, y: 50 }, { x: 40, y: 35 }, { x: 60, y: 50 }, { x: 40, y: 65 }, { x: 20, y: 50 }, { x: 60, y: 50 }, { x: 90, y: 50 }, { x: 90, y: 60 }, { x: 80, y: 60 }, { x: 80, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 60 }, { x: 60, y: 60 }] },
  { id: 'lamp', name: 'Lamp', category: 'Objects', difficulty: 'Medium', isClosed: true, points: [{ x: 40, y: 90 }, { x: 60, y: 90 }, { x: 50, y: 90 }, { x: 50, y: 50 }, { x: 30, y: 50 }, { x: 40, y: 20 }, { x: 60, y: 20 }, { x: 70, y: 50 }, { x: 50, y: 50 }] },
  { id: 'book', name: 'Open Book', category: 'Objects', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 80 }, { x: 10, y: 70 }, { x: 10, y: 20 }, { x: 50, y: 30 }, { x: 90, y: 20 }, { x: 90, y: 70 }, { x: 50, y: 80 }] },
  { id: 'pencil', name: 'Pencil', category: 'Objects', difficulty: 'Easy', isClosed: true, points: [{ x: 20, y: 80 }, { x: 30, y: 90 }, { x: 90, y: 30 }, { x: 80, y: 20 }, { x: 20, y: 80 }] },
  { id: 'clock', name: 'Clock', category: 'Objects', difficulty: 'Easy', isClosed: true, points: Array.from({ length: 12 }, (_, i) => ({ x: 50 + Math.cos((i / 12) * Math.PI * 2) * 35, y: 50 + Math.sin((i / 12) * Math.PI * 2) * 35 })) },
  { id: 'umbrella', name: 'Umbrella', category: 'Objects', difficulty: 'Hard', isClosed: false, points: [{ x: 10, y: 60 }, { x: 30, y: 40 }, { x: 50, y: 35 }, { x: 70, y: 40 }, { x: 90, y: 60 }, { x: 50, y: 60 }, { x: 50, y: 90 }, { x: 40, y: 90 }] },
  { id: 'gift', name: 'Gift Box', category: 'Objects', difficulty: 'Easy', isClosed: true, points: [{ x: 30, y: 40 }, { x: 70, y: 40 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 30, y: 40 }, { x: 50, y: 40 }, { x: 50, y: 20 }, { x: 40, y: 30 }, { x: 60, y: 30 }, { x: 50, y: 20 }] },
  { id: 'camera', name: 'Camera', category: 'Objects', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 40 }, { x: 40, y: 40 }, { x: 45, y: 30 }, { x: 55, y: 30 }, { x: 60, y: 40 }, { x: 80, y: 40 }, { x: 80, y: 80 }, { x: 20, y: 80 }, { x: 20, y: 40 }] },
  { id: 'glasses', name: 'Glasses', category: 'Objects', difficulty: 'Medium', isClosed: false, points: [{ x: 10, y: 50 }, { x: 30, y: 50 }, { x: 40, y: 65 }, { x: 20, y: 65 }, { x: 10, y: 50 }, { x: 30, y: 50 }, { x: 50, y: 50 }, { x: 70, y: 50 }, { x: 80, y: 65 }, { x: 60, y: 65 }, { x: 70, y: 50 }, { x: 90, y: 50 }] },
  { id: 'phone', name: 'Smartphone', category: 'Objects', difficulty: 'Easy', isClosed: true, points: [{ x: 35, y: 20 }, { x: 65, y: 20 }, { x: 65, y: 80 }, { x: 35, y: 80 }] },
  { id: 'hat', name: 'Party Hat', category: 'Objects', difficulty: 'Easy', isClosed: true, points: [{ x: 50, y: 10 }, { x: 80, y: 80 }, { x: 20, y: 80 }] },
  { id: 'chair', name: 'Chair', category: 'Objects', difficulty: 'Medium', isClosed: false, points: [{ x: 30, y: 20 }, { x: 30, y: 80 }, { x: 30, y: 50 }, { x: 70, y: 50 }, { x: 70, y: 80 }] },

  // VEHICLES (10)
  { id: 'truck', name: 'Truck', category: 'Vehicles', difficulty: 'Medium', isClosed: true, points: [{ x: 10, y: 70 }, { x: 60, y: 70 }, { x: 60, y: 30 }, { x: 10, y: 30 }, { x: 10, y: 70 }, { x: 60, y: 70 }, { x: 90, y: 70 }, { x: 90, y: 50 }, { x: 60, y: 50 }] },
  { id: 'plane', name: 'Airplane', category: 'Vehicles', difficulty: 'Hard', isClosed: true, points: [{ x: 10, y: 50 }, { x: 40, y: 50 }, { x: 50, y: 20 }, { x: 60, y: 50 }, { x: 90, y: 50 }, { x: 95, y: 55 }, { x: 90, y: 60 }, { x: 60, y: 60 }, { x: 50, y: 90 }, { x: 40, y: 60 }, { x: 10, y: 60 }] },
  { id: 'bicycle', name: 'Bicycle', category: 'Vehicles', difficulty: 'Complex', isClosed: false, points: [{ x: 30, y: 70 }, { x: 50, y: 70 }, { x: 70, y: 70 }, { x: 60, y: 40 }, { x: 40, y: 40 }, { x: 30, y: 70 }, { x: 40, y: 40 }, { x: 45, y: 30 }, { x: 60, y: 40 }, { x: 65, y: 30 }] },
  { id: 'bus', name: 'School Bus', category: 'Vehicles', difficulty: 'Medium', isClosed: true, points: [{ x: 10, y: 30 }, { x: 90, y: 30 }, { x: 90, y: 70 }, { x: 10, y: 70 }] },
  { id: 'train', name: 'Train Engine', category: 'Vehicles', difficulty: 'Hard', isClosed: true, points: [{ x: 10, y: 70 }, { x: 60, y: 70 }, { x: 60, y: 30 }, { x: 40, y: 30 }, { x: 40, y: 20 }, { x: 20, y: 20 }, { x: 20, y: 30 }, { x: 10, y: 30 }] },
  { id: 'helicopter', name: 'Helicopter', category: 'Vehicles', difficulty: 'Hard', isClosed: true, points: [{ x: 30, y: 50 }, { x: 70, y: 50 }, { x: 80, y: 65 }, { x: 30, y: 65 }, { x: 20, y: 55 }, { x: 30, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 30 }, { x: 30, y: 30 }, { x: 70, y: 30 }] },
  { id: 'tractor', name: 'Tractor', category: 'Vehicles', difficulty: 'Hard', isClosed: true, points: [{ x: 20, y: 70 }, { x: 50, y: 70 }, { x: 50, y: 40 }, { x: 80, y: 40 }, { x: 80, y: 70 }, { x: 90, y: 70 }, { x: 90, y: 85 }, { x: 20, y: 85 }] },
  { id: 'scooter', name: 'Kick Scooter', category: 'Vehicles', difficulty: 'Easy', isClosed: false, points: [{ x: 80, y: 20 }, { x: 80, y: 80 }, { x: 20, y: 80 }] },
  { id: 'submarine', name: 'Submarine', category: 'Vehicles', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 50 }, { x: 80, y: 50 }, { x: 85, y: 60 }, { x: 80, y: 70 }, { x: 20, y: 70 }, { x: 15, y: 60 }, { x: 20, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 30 }, { x: 60, y: 30 }] },
  { id: 'rocket-v2', name: 'Rocket V2', category: 'Vehicles', difficulty: 'Medium', isClosed: true, points: [{ x: 50, y: 10 }, { x: 70, y: 50 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 30, y: 50 }] },

  // MORE ANIMALS (20)
  { id: 'lion', name: 'Lion Head', category: 'Animals', difficulty: 'Expert', isClosed: true, points: Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const r = i % 2 === 0 ? 45 : 30;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'dog', name: 'Dog Face', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 80, y: 60 }, { x: 50, y: 80 }, { x: 20, y: 60 }] },
  { id: 'owl', name: 'Wise Owl', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 35, y: 20 }, { x: 65, y: 20 }, { x: 80, y: 40 }, { x: 80, y: 80 }, { x: 50, y: 90 }, { x: 20, y: 80 }, { x: 20, y: 40 }] },
  { id: 'turtle', name: 'Turtle', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 40 }, { x: 70, y: 40 }, { x: 85, y: 55 }, { x: 70, y: 75 }, { x: 30, y: 75 }, { x: 15, y: 55 }] },
  { id: 'fox', name: 'Fox Face', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 80 }, { x: 10, y: 30 }, { x: 30, y: 10 }, { x: 50, y: 40 }, { x: 70, y: 10 }, { x: 90, y: 30 }, { x: 50, y: 80 }] },
  { id: 'bear', name: 'Bear Head', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 30 }, { x: 40, y: 20 }, { x: 60, y: 20 }, { x: 70, y: 30 }, { x: 80, y: 50 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 20, y: 50 }] },
  { id: 'frog', name: 'Frog Face', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 40 }, { x: 40, y: 20 }, { x: 60, y: 20 }, { x: 80, y: 40 }, { x: 70, y: 70 }, { x: 30, y: 70 }] },
  { id: 'monkey', name: 'Monkey Face', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 85, y: 50 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 15, y: 50 }] },
  { id: 'shark', name: 'Shark Fin', category: 'Animals', difficulty: 'Easy', isClosed: true, points: [{ x: 20, y: 80 }, { x: 50, y: 20 }, { x: 80, y: 80 }] },
  { id: 'crab', name: 'Crab', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 30, y: 40 }, { x: 70, y: 40 }, { x: 90, y: 60 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 10, y: 60 }] },
  { id: 'bee', name: 'Bumblebee', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 30 }, { x: 70, y: 30 }, { x: 80, y: 50 }, { x: 70, y: 70 }, { x: 30, y: 70 }, { x: 20, y: 50 }] },
  { id: 'spider', name: 'Spider', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 40, y: 40 }, { x: 60, y: 40 }, { x: 60, y: 60 }, { x: 40, y: 60 }] },
  { id: 'bat', name: 'Bat', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 40 }, { x: 70, y: 20 }, { x: 90, y: 40 }, { x: 70, y: 60 }, { x: 50, y: 50 }, { x: 30, y: 60 }, { x: 10, y: 40 }, { x: 30, y: 20 }] },
  { id: 'deer', name: 'Deer Head', category: 'Animals', difficulty: 'Expert', isClosed: true, points: [{ x: 40, y: 80 }, { x: 60, y: 80 }, { x: 70, y: 40 }, { x: 90, y: 20 }, { x: 70, y: 30 }, { x: 50, y: 10 }, { x: 30, y: 30 }, { x: 10, y: 20 }, { x: 30, y: 40 }] },
  { id: 'swan', name: 'Swan', category: 'Animals', difficulty: 'Hard', isClosed: true, points: [{ x: 20, y: 80 }, { x: 80, y: 80 }, { x: 70, y: 60 }, { x: 40, y: 60 }, { x: 30, y: 20 }, { x: 50, y: 20 }] },
  { id: 'koala', name: 'Koala Face', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 30 }, { x: 30, y: 20 }, { x: 70, y: 20 }, { x: 80, y: 30 }, { x: 80, y: 70 }, { x: 20, y: 70 }] },
  { id: 'panda', name: 'Panda Face', category: 'Animals', difficulty: 'Medium', isClosed: true, points: [{ x: 30, y: 20 }, { x: 70, y: 20 }, { x: 85, y: 50 }, { x: 70, y: 80 }, { x: 30, y: 80 }, { x: 15, y: 50 }] },
  { id: 'kangaroo', name: 'Kangaroo', category: 'Animals', difficulty: 'Expert', isClosed: true, points: [{ x: 20, y: 90 }, { x: 80, y: 90 }, { x: 70, y: 60 }, { x: 80, y: 30 }, { x: 60, y: 10 }, { x: 50, y: 30 }] },
  { id: 'octopus', name: 'Octopus', category: 'Animals', difficulty: 'Expert', isClosed: true, points: [{ x: 30, y: 40 }, { x: 50, y: 10 }, { x: 70, y: 40 }, { x: 80, y: 70 }, { x: 20, y: 70 }] },
  { id: 'zebra', name: 'Zebra Stripe', category: 'Animals', difficulty: 'Hard', isClosed: false, points: [{ x: 10, y: 20 }, { x: 90, y: 20 }, { x: 10, y: 40 }, { x: 90, y: 40 }, { x: 10, y: 60 }, { x: 90, y: 60 }] },

  // MORE NATURE (15)
  { id: 'mountain', name: 'Twin Peaks', category: 'Nature', difficulty: 'Easy', isClosed: true, points: [{ x: 10, y: 80 }, { x: 40, y: 30 }, { x: 60, y: 50 }, { x: 80, y: 20 }, { x: 95, y: 80 }] },
  { id: 'river', name: 'Winding River', category: 'Nature', difficulty: 'Medium', isClosed: false, points: [{ x: 10, y: 10 }, { x: 40, y: 30 }, { x: 20, y: 50 }, { x: 60, y: 70 }, { x: 40, y: 90 }] },
  { id: 'rainbow', name: 'Rainbow Arch', category: 'Nature', difficulty: 'Easy', isClosed: false, points: Array.from({ length: 10 }, (_, i) => ({ x: 10 + (i / 9) * 80, y: 80 - Math.sin((i / 9) * Math.PI) * 40 })) },
  { id: 'flower-simple', name: 'Daisy', category: 'Nature', difficulty: 'Medium', isClosed: true, points: Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const r = i % 2 === 0 ? 35 : 10;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'cactus', name: 'Cactus', category: 'Nature', difficulty: 'Medium', isClosed: true, points: [{ x: 40, y: 90 }, { x: 60, y: 90 }, { x: 60, y: 20 }, { x: 40, y: 20 }, { x: 40, y: 40 }, { x: 20, y: 40 }, { x: 20, y: 60 }, { x: 40, y: 60 }] },
  { id: 'mushroom', name: 'Mushroom', category: 'Nature', difficulty: 'Medium', isClosed: true, points: [{ x: 40, y: 90 }, { x: 60, y: 90 }, { x: 60, y: 60 }, { x: 90, y: 60 }, { x: 50, y: 20 }, { x: 10, y: 60 }, { x: 40, y: 60 }] },
  { id: 'volcano', name: 'Volcano', category: 'Nature', difficulty: 'Hard', isClosed: true, points: [{ x: 10, y: 90 }, { x: 40, y: 30 }, { x: 60, y: 30 }, { x: 90, y: 90 }] },
  { id: 'lightning', name: 'Lightning Bolt', category: 'Nature', difficulty: 'Medium', isClosed: true, points: [{ x: 60, y: 10 }, { x: 30, y: 50 }, { x: 50, y: 50 }, { x: 20, y: 90 }, { x: 70, y: 40 }, { x: 50, y: 40 }] },
  { id: 'snowflake-simple', name: 'Small Snowflake', category: 'Nature', difficulty: 'Hard', isClosed: false, points: [{ x: 50, y: 10 }, { x: 50, y: 90 }, { x: 50, y: 50 }, { x: 10, y: 50 }, { x: 90, y: 50 }, { x: 50, y: 50 }, { x: 20, y: 20 }, { x: 80, y: 80 }, { x: 50, y: 50 }, { x: 80, y: 20 }, { x: 20, y: 80 }] },
  { id: 'tornado', name: 'Tornado', category: 'Nature', difficulty: 'Expert', isClosed: false, points: Array.from({ length: 20 }, (_, i) => ({ x: 50 + Math.sin(i) * (20 - i), y: 10 + i * 4 })) },
  { id: 'island', name: 'Island', category: 'Nature', difficulty: 'Medium', isClosed: true, points: [{ x: 20, y: 70 }, { x: 80, y: 70 }, { x: 70, y: 85 }, { x: 30, y: 85 }] },
  { id: 'crystal', name: 'Crystal', category: 'Nature', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 10 }, { x: 80, y: 40 }, { x: 50, y: 90 }, { x: 20, y: 40 }] },
  { id: 'fire', name: 'Flame', category: 'Nature', difficulty: 'Expert', isClosed: true, points: [{ x: 50, y: 90 }, { x: 80, y: 60 }, { x: 60, y: 50 }, { x: 70, y: 20 }, { x: 50, y: 40 }, { x: 30, y: 20 }, { x: 40, y: 50 }, { x: 20, y: 60 }] },
  { id: 'shell', name: 'Sea Shell', category: 'Nature', difficulty: 'Hard', isClosed: true, points: [{ x: 50, y: 80 }, { x: 90, y: 40 }, { x: 50, y: 10 }, { x: 10, y: 40 }] },
  { id: 'bamboo', name: 'Bamboo', category: 'Nature', difficulty: 'Medium', isClosed: false, points: [{ x: 40, y: 90 }, { x: 40, y: 10 }, { x: 60, y: 10 }, { x: 60, y: 90 }] },

  // MORE PATTERNS (15)
  { id: 'swirl', name: 'Swirl', category: 'Patterns', difficulty: 'Medium', isClosed: false, points: Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * Math.PI * 4;
    const r = (i / 20) * 40;
    return { x: 50 + Math.cos(angle) * r, y: 50 + Math.sin(angle) * r };
  }) },
  { id: 'grid', name: 'Grid Pattern', category: 'Patterns', difficulty: 'Hard', isClosed: false, points: [{ x: 20, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 80 }, { x: 20, y: 80 }, { x: 20, y: 20 }, { x: 20, y: 50 }, { x: 80, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 20 }, { x: 50, y: 80 }] },
  { id: 'waves-v2', name: 'Double Wave', category: 'Patterns', difficulty: 'Medium', isClosed: false, points: Array.from({ length: 20 }, (_, i) => ({ x: 10 + (i / 19) * 80, y: 40 + Math.sin((i / 5) * Math.PI) * 10 })) },
  { id: 'stairs', name: 'Stairs', category: 'Patterns', difficulty: 'Easy', isClosed: false, points: [{ x: 10, y: 90 }, { x: 10, y: 70 }, { x: 30, y: 70 }, { x: 30, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 30 }, { x: 70, y: 30 }, { x: 70, y: 10 }] },
  { id: 'diamond-chain', name: 'Diamond Chain', category: 'Patterns', difficulty: 'Hard', isClosed: false, points: [{ x: 10, y: 50 }, { x: 25, y: 30 }, { x: 40, y: 50 }, { x: 25, y: 70 }, { x: 10, y: 50 }, { x: 40, y: 50 }, { x: 55, y: 30 }, { x: 70, y: 50 }, { x: 55, y: 70 }, { x: 40, y: 50 }, { x: 70, y: 50 }, { x: 85, y: 30 }, { x: 100, y: 50 }, { x: 85, y: 70 }, { x: 70, y: 50 }] },
  { id: 'helix', name: 'DNA Helix', category: 'Patterns', difficulty: 'Expert', isClosed: false, points: Array.from({ length: 20 }, (_, i) => ({ x: 30 + Math.sin(i) * 20, y: 10 + i * 4 })) },
  { id: 'checker', name: 'Checkerboard', category: 'Patterns', difficulty: 'Hard', isClosed: true, points: [{ x: 20, y: 20 }, { x: 50, y: 20 }, { x: 50, y: 50 }, { x: 20, y: 50 }, { x: 20, y: 20 }, { x: 50, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 80 }, { x: 80, y: 80 }, { x: 80, y: 50 }] },
  { id: 'infinity', name: 'Infinity Loop', category: 'Patterns', difficulty: 'Hard', isClosed: true, points: Array.from({ length: 20 }, (_, i) => {
    const t = (i / 20) * Math.PI * 2;
    return { x: 50 + Math.sin(t) * 40, y: 50 + Math.sin(t) * Math.cos(t) * 40 };
  }) },
  { id: 'cross-hatch', name: 'Cross Hatch', category: 'Patterns', difficulty: 'Medium', isClosed: false, points: [{ x: 20, y: 20 }, { x: 80, y: 80 }, { x: 80, y: 20 }, { x: 20, y: 80 }] },
  { id: 'concentric', name: 'Target', category: 'Patterns', difficulty: 'Hard', isClosed: true, points: Array.from({ length: 24 }, (_, i) => ({ x: 50 + Math.cos((i / 8) * Math.PI * 2) * (10 + Math.floor(i / 8) * 10), y: 50 + Math.sin((i / 8) * Math.PI * 2) * (10 + Math.floor(i / 8) * 10) })) },
  { id: 'zigzag-v2', name: 'Sharp Zigzag', category: 'Patterns', difficulty: 'Easy', isClosed: false, points: [{ x: 10, y: 10 }, { x: 90, y: 30 }, { x: 10, y: 50 }, { x: 90, y: 70 }, { x: 10, y: 90 }] },
  { id: 'spiral-square', name: 'Square Spiral', category: 'Patterns', difficulty: 'Hard', isClosed: false, points: [{ x: 50, y: 50 }, { x: 60, y: 50 }, { x: 60, y: 60 }, { x: 40, y: 60 }, { x: 40, y: 40 }, { x: 70, y: 40 }, { x: 70, y: 70 }, { x: 30, y: 70 }, { x: 30, y: 30 }, { x: 80, y: 30 }] },
  { id: 'weave', name: 'Weave Pattern', category: 'Patterns', difficulty: 'Expert', isClosed: false, points: [{ x: 10, y: 10 }, { x: 90, y: 90 }, { x: 10, y: 90 }, { x: 90, y: 10 }, { x: 50, y: 10 }, { x: 50, y: 90 }, { x: 10, y: 50 }, { x: 90, y: 50 }] },
  { id: 'dots', name: 'Dot Matrix', category: 'Patterns', difficulty: 'Easy', isClosed: false, points: [{ x: 20, y: 20 }, { x: 50, y: 20 }, { x: 80, y: 20 }, { x: 80, y: 50 }, { x: 50, y: 50 }, { x: 20, y: 50 }, { x: 20, y: 80 }, { x: 50, y: 80 }, { x: 80, y: 80 }] },
  { id: 'fractal-v1', name: 'Simple Fractal', category: 'Patterns', difficulty: 'Expert', isClosed: false, points: [{ x: 50, y: 10 }, { x: 50, y: 50 }, { x: 10, y: 50 }, { x: 50, y: 50 }, { x: 90, y: 50 }, { x: 50, y: 50 }, { x: 50, y: 90 }] },
];

export const TRACING_TEMPLATES: TracingTemplate[] = [
  ...baseTemplates,
  // DIVERSIFIED POLYGONS
  ...Array.from({ length: 4 }, (_, i) => generatePolygon(`poly-${i + 5}`, `${i + 5}-Sided Polygon`, i + 5, i < 2 ? 'Medium' : 'Hard')),
];
