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

  if (htmlCode.length === 0) {
    return (
      <img
        src={ErrorImage}
        alt='Personaje no encontrado'
        title='Personaje no encontrado'
      />
    );
  } else {
    return <ul className='characters'>{htmlCode}</ul>;
  }
};

export default CharacterList;
