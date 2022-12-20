

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/stats">Stats</a>
          </li>
          <li>
            <a href="/converter">Grade Converter</a>
          </li>
          <li>
            <a href="/info">Bibelen</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
