import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
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
        <h3 className='character__species'>{props.species}</h3>
        <span className={`character__is${props.status}`}></span>
      </li>
    </Link>
  );
};

export default Character;
