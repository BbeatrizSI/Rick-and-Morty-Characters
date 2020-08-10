import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../stylesheets/Character.scss';

const Character = (props) => {
  // Genero 2 funciones para determinar los iconos de especie y estatus en función de cual sea cada uno.
  const statusIcon = () => {
    if (props.status === 'Dead') {
      return <i className='fas fa-skull-crossbones'></i>;
    } else if (props.status === 'unknown') {
      return <i className='fas fa-question'></i>;
    } else {
      return <i className='fas fa-heartbeat'></i>;
    }
  };
  const speciesIcon = () => {
    return props.species === 'Alien' ? (
      <i className='fas fa-pastafarianism'></i>
    ) : (
      <i className='fas fa-male'></i>
    );
  };

  return (
    // Se envuelve todo el JSX en <Link> (React-Router).
    <Link to={`/character/${props.id}`}>
      <li className='character' key={props.id}>
        <div className='character__container--image'>
          <img
            src={props.image}
            alt={`Foto de ${props.name}`}
            title={`Foto de ${props.name}`}
            className='character__image'
          />
        </div>
        <h2 className='character__name'>{props.name}</h2>
        <div className='icons__container'>
          <span
            className='character__species'
            title={`${props.name} is from ${props.species} species`}
          >
            {speciesIcon()}
          </span>
          <span
            className='character__status'
            title={`${props.name} is ${props.status}`}
          >
            {statusIcon()}
          </span>
        </div>
      </li>
    </Link>
  );
};

Character.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  name: PropTypes.number,
};

export default Character;
