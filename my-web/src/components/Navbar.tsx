import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="NavbarLink" to="/">StartPage</Link>
        </li>
        <li>
          <Link className="NavbarLink" to="/BlogPage">Blog</Link>
        </li>
        <li>
          <Link className="NavbarLink" to="/KursPage">Kurs</Link>
        </li>
        <li>
          <Link className="NavbarLink" to="/EventPage">Eventer</Link>
        </li>

        <li>
          <Link className="NavbarLink" to="/FAQ">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar