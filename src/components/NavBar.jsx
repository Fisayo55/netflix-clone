import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FirebaseAuth } from "../utils/Firebase";

const btnClass =
  "bg-transparent border-none cursor-pointer focus:outline-none text-custom-red text-xl";

const NavBar = ({ isScrolled }) => {
  const navigate = useNavigate();

  const links = [
    { name: "Home", link: "/" },
    { name: "Tv show", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  onAuthStateChanged(FirebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <div>
      <nav
        className={`flex sticky top-0 h-24 w-screen justify-between z-2 px-16 items-center ease-in-out ${
          isScrolled ? "bg-black" : ""
        }`}
      >
        <div className="gap-8 flex items-center">
          <div className="brand flex items-center justify-center">
            <img className="h-16" src={logo} alt={logo} />
          </div>
          <ul className="list-none gap-8 flex">
            {links.map(({ name, link }) => (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="gap-2 flex items-center">
          <div
            className={`flex gap-2 items-center justify-center p-2 ${
              showSearch
                ? "border border-white border-solid bg-black bg-opacity-60"
                : ""
            }`}
          >
            <button
              className={btnClass}
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              className={`${
                showSearch ? "w-40 opacity-50 p-2" : "w-0 opacity-0 hidden"
              } text-white bg-transparent border-none focus:outline-none`}
              type="text"
              placeholder="search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
              }}
            />
          </div>
          <button className={btnClass} onClick={() => signOut(FirebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
