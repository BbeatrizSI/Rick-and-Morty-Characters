import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_header.png';

const Header = () => {
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img src={logo} alt='Ricky & Morty logo' title='Ricky & Morty logo' />
        </Link>
      </div>
    </>
  );
};

export default Header;
