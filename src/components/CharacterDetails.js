import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/CharacterDetails.scss';

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
        <p className='description'>
          From <span className='bold'>{props.planet}</span>, now is
          <span className='bold'> {props.status}</span>. Of
          <span className='bold'> {props.gender}</span> gender. Appears in
          <span className='bold'> {props.episodes}</span> episodes.
          <span className='bold'> {props.type}</span>
        </p>
      </div>
    </article>
  );
};

export default CharacterDetails;
