import React from 'react';

const CharacterDetails = (props) => {
  return (
    <article className='character__details'>
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
    </article>
  );
};

export default CharacterDetails;
