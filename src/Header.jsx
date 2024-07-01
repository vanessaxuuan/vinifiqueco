import './Header.css'; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img width={"100%"} height={"100%"} src="/vlogo.png" loading="lazy" /></div>
      <nav className="nav">
        <a href="#winesSection" className="nav-link">Wines</a>
        <a href="#about" className="nav-link">About</a>
      </nav>
    </header>
  );
};

export default Header;
