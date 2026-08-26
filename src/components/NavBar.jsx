import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/*Redirects the user to differnt sites on click*/}
      <Link className="nav-link" to="/">
        Cookie Clicker
      </Link>

      {/*Redirects the user to differnt sites on click*/}
      <Link className="nav-link" to="/cat">
        Cat Fact
      </Link>

      {/*Redirects the user to differnt sites on click*/}
      <Link className="nav-link" to="/user">
        User Manager
      </Link>
    </nav>
  );
}
