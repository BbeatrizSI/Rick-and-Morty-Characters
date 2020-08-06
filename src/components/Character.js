import React from 'react';

const Character = (props) => {
  return (
    <article className='character'>
      <img
        src={props.image}
        alt={`Foto de ${props.name}`}
        title={`Foto de ${props.name}`}
        className='character__image'
      />
      <h2 className='character__name'>{props.name}</h2>
      <h3 className='character__species'>{props.species}</h3>
    </article>
  );
};

export default Character;
