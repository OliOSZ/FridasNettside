import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="NavbarLink" to="/">StartPage</Link>
        </li>
        <li>
          <Link className="NavbarLink" to="/HomePage">HomePage</Link>
        </li>
        <li>
          <Link className="NavbarLink" to="/BlogPage">BlogPage</Link>
        </li>
        <li>
          <Link className="NavbarLink" to="/FAQ">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar