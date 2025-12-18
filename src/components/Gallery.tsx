import { characters } from '@/data/storyData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GalleryProps {
  unlockedCharacters: string[];
  onClose: () => void;
}

export const Gallery = ({ unlockedCharacters, onClose }: GalleryProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-heading font-bold text-primary">Галерея персонажей</h2>
          <Button 
            onClick={onClose}
            variant="outline"
            size="icon"
            className="border-primary/50 hover:bg-primary/20"
          >
            <Icon name="X" size={24} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => {
            const isUnlocked = unlockedCharacters.includes(character.id);
            
            return (
              <Card 
                key={character.id} 
                className={`overflow-hidden transition-all duration-300 hover:scale-105 ${
                  isUnlocked 
                    ? 'bg-card border-primary/50' 
                    : 'bg-muted border-muted-foreground/20'
                }`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={character.image}
                    alt={character.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      isUnlocked ? '' : 'filter grayscale blur-sm'
                    }`}
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <div className="text-center space-y-2">
                        <Icon name="Lock" size={32} className="mx-auto text-muted-foreground" />
                        <p className="text-sm text-muted-foreground font-semibold">Заблокировано</p>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className={`font-heading text-xl font-bold mb-2 ${
                    isUnlocked ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {isUnlocked ? character.name : '???'}
                  </h3>
                  <p className={`text-sm ${
                    isUnlocked ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {isUnlocked ? character.description : 'Познакомьтесь с персонажем в игре'}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            Открыто персонажей: {unlockedCharacters.length} / {characters.length}
          </p>
        </div>
      </div>
    </div>
  );
};
