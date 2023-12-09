import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

const Card = ({ movieData, isLiked = false }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-230 w-230 h-full cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="card"
        onClick={() => navigate("/player")}
        className="rounded-md w-full h-full"
      />

      {isHovered && (
        <div className="hover z-50 h-max-content w-80 absolute top-[-18vh] left-0 rounded-md shadow-lg bg-181818 transition duration-300 ease-in-out">
          <div className="image-video-container relative h-40">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="card"
              onClick={() => navigate("/player")}
              className="w-full h-full object-cover rounded-md"
            />
            <video
              src=""
              autoPlay={true}
              loop
              muted
              onClick={() => navigate("/player")}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="info-container flex flex-col p-4 gap-2">
            <h3
              className="name cursor-pointer"
              onClick={() => navigate("/player")}
            >
              {movieData.name}
            </h3>
            <div className="icons flex justify-between">
              <div className="controls flex gap-1">
                <IoPlayCircleSharp
                  title="Play"
                  onClick={() => navigate("/player")}
                  className="text-2xl cursor-pointer ease-in-out hover:text-gray-300"
                />
                <RiThumbUpFill
                  title="Like"
                  className="text-2xl cursor-pointer ease-in-out hover:text-gray-300"
                />
                <RiThumbDownFill
                  title="Dislike"
                  className="text-2xl cursor-pointer ease-in-out hover:text-gray-300"
                />
                {isLiked ? (
                  <BsCheck
                    title="Remove from list"
                    className="text-2xl cursor-pointer ease-in-out hover:text-gray-300"
                  />
                ) : (
                  <AiOutlinePlus
                    title="add to my list"
                    className="text-2xl cursor-pointer ease-in-out hover:text-gray-300"
                  />
                )}
              </div>
              <div className="info">
                <BiChevronDown
                  title="More Info"
                  className="text-2xl cursor-pointer ease-in-out hover:text-gray-300"
                />
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex gap-1">
                {movieData.genres.map((genre, index) => (
                  <li key={index} className="pr-0.7">
                    {genre}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
