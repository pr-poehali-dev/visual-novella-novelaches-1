import { useState, useEffect } from 'react';
import { Scene, GameState, Choice } from '@/types/story';
import { scenes, characters } from '@/data/storyData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface GameEngineProps {
  onGalleryOpen: () => void;
}

export const GameEngine = ({ onGalleryOpen }: GameEngineProps) => {
  const [gameState, setGameState] = useState<GameState>({
    currentScene: 'start',
    visitedScenes: ['start'],
    unlockedCharacters: ['akira'],
    choices: {}
  });

  const currentScene = scenes[gameState.currentScene];
  const currentCharacter = currentScene.character 
    ? characters.find(c => c.id === currentScene.character)
    : null;

  const handleChoice = (choice: Choice) => {
    const newVisitedScenes = [...gameState.visitedScenes, choice.nextScene];
    const newChoices = { ...gameState.choices, [currentScene.id]: choice.id };
    
    const newUnlockedCharacters = [...gameState.unlockedCharacters];
    const nextScene = scenes[choice.nextScene];
    if (nextScene.character && !newUnlockedCharacters.includes(nextScene.character)) {
      newUnlockedCharacters.push(nextScene.character);
    }

    setGameState({
      currentScene: choice.nextScene,
      visitedScenes: newVisitedScenes,
      unlockedCharacters: newUnlockedCharacters,
      choices: newChoices
    });
  };

  const handleContinue = () => {
    if (currentScene.nextScene) {
      const newVisitedScenes = [...gameState.visitedScenes, currentScene.nextScene];
      const nextScene = scenes[currentScene.nextScene];
      
      const newUnlockedCharacters = [...gameState.unlockedCharacters];
      if (nextScene.character && !newUnlockedCharacters.includes(nextScene.character)) {
        newUnlockedCharacters.push(nextScene.character);
      }

      setGameState({
        ...gameState,
        currentScene: currentScene.nextScene,
        visitedScenes: newVisitedScenes,
        unlockedCharacters: newUnlockedCharacters
      });
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes textReveal {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .text-reveal {
        animation: textReveal 0.6s ease-out;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${currentScene.background})`,
          filter: 'brightness(0.4)'
        }}
      />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="p-4 flex justify-between items-center bg-black/30 backdrop-blur-sm">
          <h1 className="text-2xl font-heading font-bold text-primary">NovelaChes</h1>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={onGalleryOpen}
              className="bg-black/50 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
            >
              Галерея
            </Button>
          </div>
        </header>

        <div className="flex-1 flex items-end pb-8 px-4">
          <div className="w-full max-w-4xl mx-auto space-y-4">
            {currentCharacter && (
              <div className="flex items-center gap-3 text-reveal mb-2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary">
                  <img 
                    src={currentCharacter.image} 
                    alt={currentCharacter.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-heading text-lg text-primary font-semibold">
                  {currentScene.speaker}
                </span>
              </div>
            )}

            <Card className="bg-black/80 backdrop-blur-md border-primary/30 p-6 text-reveal">
              <p className="text-base md:text-lg leading-relaxed text-foreground">
                {currentScene.text}
              </p>
            </Card>

            <div className="space-y-2">
              {currentScene.choices ? (
                currentScene.choices.map((choice) => (
                  <Button
                    key={choice.id}
                    onClick={() => handleChoice(choice)}
                    className="w-full justify-start text-left h-auto py-3 px-4 bg-primary/90 hover:bg-primary text-primary-foreground font-medium transition-all duration-200 hover:scale-[1.02]"
                    variant="default"
                  >
                    {choice.text}
                  </Button>
                ))
              ) : currentScene.nextScene ? (
                <Button
                  onClick={handleContinue}
                  className="w-full bg-primary/90 hover:bg-primary text-primary-foreground font-medium"
                >
                  Продолжить
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
