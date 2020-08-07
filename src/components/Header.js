import React from 'react';
import logo from '../images/logo_header.png';

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='Ricky & Morty logo' title='Ricky & Morty logo' />
      </div>
    </>
  );
};

export default Header;
