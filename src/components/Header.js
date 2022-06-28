import logoPath from '../images/header-logo.svg';

function Header () {

  return (
    <header className="header page__header">
      <a href="#" className="header__logo-link">
        <img src={logoPath} alt="Логотип сайта" className="header__logo"/>
      </a>
    </header>
  );
}

export default Header;
