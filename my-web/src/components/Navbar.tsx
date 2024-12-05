import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">StartPage</Link>
        </li>
        <li>
          <Link to="/HomePage">HomePage</Link>
        </li>
        <li>
          <Link to="/BlogPage">BlogPage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar