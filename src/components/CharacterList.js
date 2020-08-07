import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const htmlCode = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
      />
    );
  });
  return <ul className='characters'>{htmlCode}</ul>;
};

export default CharacterList;
