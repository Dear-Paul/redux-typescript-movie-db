import { Link } from "react-router-dom";
import { Search } from "./Search";
import "../App.css";
function Header() {
  return (
    <nav className="nav">
      <Link to="/">
        {" "}
        <h2>Home</h2>{" "}
      </Link>
      <Link to="/favourites">
        {" "}
        <h2>Favourites</h2>
        {/* <input className="input" type="search" placeholder="Movie title" /> */}
      
      </Link>

      <Search />
    </nav>
  );
}
export default Header;
