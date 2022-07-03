import { Link } from 'react-router-dom';
import logoPath from '../images/header-logo.svg';

function Header ({ children }) {

  return (
    <header className='header page__header'>
      <Link to='/' className='header__logo-link'>
        <img src={logoPath} alt='Логотип сайта' className='header__logo'/>
      </Link>
      <nav className="header__menu">{ children }</nav>
    </header>
  );
}

export default Header;
