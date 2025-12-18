export interface Character {
  id: string;
  name: string;
  image: string;
  description: string;
  unlocked: boolean;
}

export interface Choice {
  id: string;
  text: string;
  nextScene: string;
  impact?: 'positive' | 'negative' | 'neutral';
}

export interface Scene {
  id: string;
  background: string;
  character?: string;
  text: string;
  speaker?: string;
  choices?: Choice[];
  nextScene?: string;
}

export interface GameState {
  currentScene: string;
  visitedScenes: string[];
  unlockedCharacters: string[];
  choices: Record<string, string>;
}
