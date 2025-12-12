import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="soft-nav">
      <div className="nav-logo">
        <Link to="/">ZeneNation</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/category/keychain">Keychains</Link></li>
        <li><Link to="/category/katana">Mini Katana</Link></li>
        <li><Link to="/category/karambit">Karambits</Link></li>
      </ul>

    </nav>
  );
};

export default Navbar;
