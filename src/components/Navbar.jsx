import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="soft-nav">
      <div className="nav-logo">
        <Link to="/">ZeneNation</Link>
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

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/category/keychain" onClick={() => setMenuOpen(false)}>Keychains</Link></li>
        <li><Link to="/category/mascot" onClick={() => setMenuOpen(false)}>Figures & Mascot</Link></li>
        <li><Link to="/category/armory" onClick={() => setMenuOpen(false)}>Mini Armory</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

