import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">
        Cookie Clicker
      </Link>
      <Link className="nav-link" to="/cat">
        Cat Fact
      </Link>
      <Link className="nav-link" to="/user">
        User Manager
      </Link>
    </nav>
  );
}
