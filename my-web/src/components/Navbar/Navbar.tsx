import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="Navbar">
      <ul className="NavbarList">
        <li className="NavbarBrand">
          <Link to="/" className="NavbarLink BrandLink">FriMedYoga</Link>
        </li>
        <div className="NavCenter">
          <li>
            <Link
              className={`NavbarLink ${location.pathname === "/BlogPage" ? "active" : ""}`}
              to="/BlogPage"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={`NavbarLink ${location.pathname === "/KursPage" ? "active" : ""}`}
              to="/KursPage"
            >
              Kurs
            </Link>
          </li>
          <li>
            <Link
              className={`NavbarLink ${location.pathname === "/EventPage" ? "active" : ""}`}
              to="/EventPage"
            >
              Eventer
            </Link>
          </li>
          <li>
            <Link
              className={`NavbarLink ${location.pathname === "/FAQ" ? "active" : ""}`}
              to="/FAQ"
            >
              Kontakt
            </Link>
          </li>
        </div>
        <div className="NavIcons">
          <li>
            <a href="https://www.facebook.com/FriMedYoga/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-facebook-square bx-md"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/frimedyoga/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-instagram-alt bx-md"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/FriMedYoga/" target="_blank" rel="noopener noreferrer">
              <i className="bx bxl-basket bx-md"></i>
            </a>
          </li>
          <li>
            <a href="/profile" className="ProfileLink">
              <i className="bx bxs-user-circle bx-md"></i>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
