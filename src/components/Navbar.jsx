import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="soft-nav">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/Logos.png"
            alt="Logo"
            className="logo-img"
          />
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/category/keychain" onClick={() => setMenuOpen(false)}>
            Keychains
          </Link>
        </li>
        <li>
          <Link to="/category/mascot" onClick={() => setMenuOpen(false)}>
            Figures & Mascot
          </Link>
        </li>
        <li>
          <Link to="/category/armory" onClick={() => setMenuOpen(false)}>
            Mini Armory
          </Link>
        </li>

        <li>
          <Link to="/category/mug" onClick={() => setMenuOpen(false)}>
            Mugs
          </Link>
        </li>
        <li>
          <Link to="/category/poster" onClick={() => setMenuOpen(false)}>
            Posters
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
