import { useState } from 'react';
import { GameEngine } from '@/components/GameEngine';
import { Gallery } from '@/components/Gallery';

const Index = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [unlockedCharacters, setUnlockedCharacters] = useState<string[]>(['akira']);

  return (
    <>
      <GameEngine 
        onGalleryOpen={() => setShowGallery(true)}
      />
      {showGallery && (
        <Gallery 
          unlockedCharacters={unlockedCharacters}
          onClose={() => setShowGallery(false)}
        />
      )}
    </>
  );
};

export default Index;