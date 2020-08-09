import React from 'react';
import peace from '../images/peace.jpg';

const NoMatch = () => {
  return (
    <>
      <div className='NoMatch'>
        <h1 className='NoMatch__title'>I'm in peace cause' nobody is here</h1>
        <img
          className='NoMatch__image'
          src={peace}
          alt='Character Not Found'
          title='Character Not Found'
        />
      </div>
    </>
  );
};

export default NoMatch;
