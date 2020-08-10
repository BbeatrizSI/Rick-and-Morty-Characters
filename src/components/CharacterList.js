import React from 'react';
import Character from './Character';
import PropTypes from 'prop-types';
import ErrorImage from '../images/error.png';
import '../stylesheets/CharacterList.scss';

const CharacterList = (props) => {
  // Mapeo characters para limpiar la info que quiero pasar a Characters para pintar cada personaje. Al mismo tiempo, si el array obtenido es "0", muestro una imagen de "personaje no encontrado".
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

  return htmlCode.length === 0 ? (
    <img
      src={ErrorImage}
      alt='Personaje no encontrado'
      title='Personaje no encontrado'
    />
  ) : (
    <ul className='characters'>{htmlCode}</ul>
  );
};

CharacterList.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
};

export default CharacterList;
