import React from "react";
import "./Navbar.css";
import icebear from "../../assets/icebear.png";
import toggle_dark from "../../assets/toggle_dark.png";
import toggle_light from "../../assets/toggle_light.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      {/* <img src="{theme == 'light' ? logo_light : logo_dark}" alt="" className="logo" /> */}
      <img src={icebear} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Algorithms</li>
        <li>Patterns</li>
        <li>LeetCode Problems</li>
      </ul>

      {/* Toggle Icon */}
      <img
        onClick={toggle_mode}
        src={theme == "light" ? toggle_dark : toggle_light}
        alt=""
        className="toggleIcon"
      />
    </div>
  );
};

export default Navbar;
