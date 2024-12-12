import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
const location = useLocation();


  return (
    <nav className="Navbar">
      <ul className="NavbarList">
        <li>
          <Link className={`NavbarLink ${location.pathname === "/" ? "active" : ""}`}
            to="/">FriMedYoga</Link>
        </li>
        <li>
          <Link className={`NavbarLink ${location.pathname === "/BlogPage" ? "active" : ""}`}
            to="/BlogPage">Blog</Link>
        </li>
        <li>
          <Link className={`NavbarLink ${location.pathname === "/KursPage" ? "active" : ""}`}
            to="/KursPage">Kurs</Link>
        </li>
        <li>
          <Link className={`NavbarLink ${location.pathname === "/EventPage" ? "active" : ""}`}
            to="/EventPage">Eventer</Link>
        </li>

        <li>
          <Link  className={`NavbarLink ${location.pathname === "/FAQ" ? "active" : ""}`}
            to="/FAQ">Kontakt</Link>
        </li>
        <li>
          <a href="https://www.facebook.com/FriMedYoga/" target="_blank">
            <i className='bx bxl-facebook-square bx-md' id="facebookLogo"></i>
          </a>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar