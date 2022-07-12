import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../images/header-logo.svg';

function Header ({ children }) {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  useEffect(() => {


  }, [menuIsOpened]);

  function handleToggleMenu () {

  }

  return (
    <header className='header page__header'>
      <nav className="header__mobile-menu">{ children }</nav>
      <div className="header__wrapper">
        <Link to='/' className='header__logo-link'>
          <img src={logoPath} alt='Логотип сайта' className='header__logo'/>
        </Link>
        <nav className="header__menu">{ children }</nav>
      </div>

    </header>
  );
}

export default Header;
