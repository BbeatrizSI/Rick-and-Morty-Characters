import React from 'react';
import peace from '../images/peace.jpg';
import '../stylesheets/NoMatch.scss';

const NoMatch = () => {
  return (
    <>
      <div className='NoMatch'>
        <h2 className='NoMatch__title'>
          I'm in peace...
          <span className='title__desktop'>'cause nobody's here</span>
        </h2>
        <img
          className='NoMatch__image'
          src={peace}
          alt='Character Not Found'
          title='Character Not Found'
        />
        <h2 className='NoMatch__title title__desktop2'>'cause nobody's here</h2>
      </div>
    </>
  );
};

export default NoMatch;
