import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
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
    if (props.species === 'Alien') {
      return <i className='fas fa-pastafarianism'></i>;
    } else {
      return <i className='fas fa-male'></i>;
    }
  };

  return (
    <Link to={`/character/${props.id}`}>
      <li className='character' key={props.id}>
        <img
          src={props.image}
          alt={`Foto de ${props.name}`}
          title={`Foto de ${props.name}`}
          className='character__image'
        />
        <h2 className='character__name'>{props.name}</h2>
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
      </li>
    </Link>
  );
};

export default Character;
