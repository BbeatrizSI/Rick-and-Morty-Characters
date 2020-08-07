import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetails = (props) => {
  return (
    <article className='character__details' key={props.id}>
      <Link to='/'>
        <span className='character__details--return'>Volver</span>
      </Link>
      <div className='character__details--container'>
        <img
          src={props.image}
          alt={`Foto de ${props.name}`}
          title={`Foto de ${props.name}`}
          className='character__details--image'
        />
        <h2 className='character__details--name'>{props.name}</h2>
        <h3 className='character__details--species'>{props.species}</h3>
        <p>
          {props.planet}
          {props.status}
          {props.episodes}
          {props.type}
          {props.gender}
        </p>
      </div>
    </article>
  );
};

export default CharacterDetails;
