import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = ({ login }) => {
  const navigate = useNavigate();
  return (
    <div className="px-4 flex items-center justify-between">
      <div>
        <img className="h-20" src={logo} alt={logo} />
      </div>
      <button
        className="py-2 px-4 bg-custom-red border-none cursor-pointer text-white rounded font-bold text-lg"
        onClick={() => navigate(login ? "/login" : "/signup")}
      >
        {login ? "Log in" : "Sign in"}
      </button>
    </div>
  );
};

export default Header;
