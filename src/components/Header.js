import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../images/header-logo.svg';

function Header ({ children, loggedIn }) {
  const mql = window.matchMedia('(max-width: 767px)');

  const [mainMenuVisible, setMainMenuVisible] = useState(true);
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false);
  const [isMobileScreenSize, setIsMobileScreenSize] = useState(mql.matches);

  useEffect(() => {
    mql.addEventListener('change', handleChangeSize);
    return () => {
      mql.removeEventListener('change', handleChangeSize);
    };
  }, [mql]);

  useEffect(() => {
    if (!isMobileScreenSize || (isMobileScreenSize && !loggedIn)) {
      setMainMenuVisible(true);
    } else {
      setMainMenuVisible(false);
    }
  }, [isMobileScreenSize, loggedIn]);

  function handleChangeSize (e) {
    if (e.matches) {
      setIsMobileScreenSize(true);
    } else {
      setIsMobileScreenSize(false);
    }
  }

  function handleToggleMenu () {
    setMobileMenuIsOpened(!mobileMenuIsOpened);
  }

  return (
    <header className='header page__header'>
      {mobileMenuIsOpened && loggedIn && <nav className="header__mobile-menu">{ children }</nav>}
      <div className="header__wrapper">
        <Link to='/' className='header__logo-link'>
          <img src={logoPath} alt='Логотип сайта' className='header__logo'/>
        </Link>
        {loggedIn && (
          <button type="button" className={`burger header__burger ${mobileMenuIsOpened ? "burger_open" : ""}`} onClick={handleToggleMenu}>
            <div className="burger__icon"></div>
          </button>
        )}
        {mainMenuVisible && <nav className="header__menu">{ children }</nav>}
      </div>
    </header>
  );
}

export default Header;
