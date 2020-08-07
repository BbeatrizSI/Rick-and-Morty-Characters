import React, { useEffect, useState } from 'react';
import getDataFromApi from '../services/api';
import Header from './Header';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setCharacters(data);
    });
  }, []);

  const renderCharacterDetails = () => {
    const character = characters[2];
    if (character) {
      return (
        <CharacterDetails
          name={character.name}
          image={character.image}
          species={character.species}
          planet={character.origin.name}
          status={character.status}
          episodes={character.episode.length}
          type={character.type}
          gender={character.gender}
        />
      );
    }
  };

  return (
    <div>
      <Header />
      <CharacterList characters={characters} />
      {renderCharacterDetails()}
    </div>
  );
};

export default App;
