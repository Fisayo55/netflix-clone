import { useState } from "react";
import NavBar from "../components/NavBar";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll == null;
  };
  return (
    <div>
      <NavBar isScrolled={isScrolled} />
    </div>
  );
};

export default Netflix;
