import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_header.png';
import '../stylesheets/Header.scss';

const Header = () => {
  // Dejo el logo como enlace a la página principal.
  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img
            className='header__logo'
            src={logo}
            alt='Ricky & Morty logo'
            title='Ricky & Morty logo'
          />
        </Link>
      </div>
    </>
  );
};

export default Header;
