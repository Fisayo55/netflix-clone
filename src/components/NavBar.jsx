import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const NavBar = ({ isScrolled }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "Tv show", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];
  return (
    <div>
      <nav className={`flex ${isScrolled ? "scrolled" : ""}`}>
        <div className="left flex items-center">
          <div className="brand flex items-center justify-center">
            <img src={logo} alt={logo} />
          </div>
          <ul className="links flex">
            {links.map((name, link) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex items-center">
          <div className="search"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
