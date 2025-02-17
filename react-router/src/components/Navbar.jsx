import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Chi siamo</Link>
        </li>
        <li>
          <Link to="/posts">Piatti</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
