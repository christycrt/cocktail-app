import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="nav-lists">
        <Link to="/">
          <img src="/images/logo.svg" alt="logo" className="logo" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
