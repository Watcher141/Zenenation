import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="soft-nav">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" onClick={closeMenu}>
          <img src="/images/Logos.png" alt="Logo" className="logo-img" />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/category/keychain" onClick={closeMenu}>Keychains</Link>
        </li>
        <li>
          <Link to="/category/mascot" onClick={closeMenu}>Figures & Mascot</Link>
        </li>
        <li>
          <Link to="/category/armory" onClick={closeMenu}>Mini Armory</Link>
        </li>
        <li>
          <Link to="/category/mug" onClick={closeMenu}>Mugs</Link>
        </li>
        <li>
          <Link to="/category/poster" onClick={closeMenu}>Posters</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

