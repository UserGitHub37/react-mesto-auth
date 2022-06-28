function Footer () {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer page__footer">
      <p className="footer__author">&copy;&nbsp;{currentYear} Mesto Russia</p>
    </footer>
  );
}

export default Footer;
