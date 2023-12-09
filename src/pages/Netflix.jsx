import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import backgroundImage from "../assets/home.jpg";
import MovieLogo from "../assets/homeTitle.webp";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

const btnStyles =
  "flex justify-center bg-stone-200 text-black items-center text-2xl gap-4 rounded-lg p-2 px-4 border-none cursor-pointer ease-in-out hover:opacity-5 font-semibold";
const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    if (genresLoaded) dispatch(fetchMovies({ type: "all" }));
  }, []);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  console.log(movies);
  return (
    <div className="bg-black">
      <NavBar isScrolled={isScrolled} />
      <div className="relative">
        <img
          src={backgroundImage}
          alt={backgroundImage}
          className="brightness-50 h-screen w-screen"
        />
        <div className="absolute bottom-20">
          <div className="logo">
            <img
              className="h-120 w-120 ml-20"
              src={MovieLogo}
              alt={MovieLogo}
            />
            <div className="m-20 gap-8 flex">
              <button className={btnStyles} onClick={() => navigate("/player")}>
                <FaPlay /> Play
              </button>
              <button className={btnStyles}>
                <AiOutlineInfoCircle /> More info
              </button>
            </div>
          </div>
        </div>
      </div>
      <Slider movies={movies} />
    </div>
  );
};

export default Netflix;
