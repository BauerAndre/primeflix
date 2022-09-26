import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link className="Logo" to="/">
        Prime Flix
      </Link>
      <Link className="favorits" to="/favorits">
        My favorits movies
      </Link>
    </header>
  );
}

export default Header;
