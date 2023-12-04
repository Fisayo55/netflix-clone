import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Player = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video
          src="https://www.youtube.com/watch?v=a3thyAnShck&pp=ygUgc3RyYW5nZXIgdGhpbmdzIHNlYXNvbiA0IHRyYWlsZXI%3D"
          autoPlay
          loop
          controls
          muted
        ></video>
      </div>
    </div>
  );
};

export default Player;
