import React from 'react';
import Character from './Character';
import ErrorImage from '../images/error.png';

const CharacterList = (props) => {
  const htmlCode = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        species={character.species}
        status={character.status}
      />
    );
  });

  if (props.setCharacters && props.characters.length > 1) {
    return <ul className='characters'>{htmlCode}</ul>;
  } else {
    return (
      <img
        src={ErrorImage}
        alt='Personaje no encontrado'
        title='Personaje no encontrado'
      />
    );
  }
};

export default CharacterList;
