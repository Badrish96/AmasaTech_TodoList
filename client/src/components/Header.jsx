import React from "react";
import "../App.css";

const Header = ({ title, logo }) => {
  return (
    <header>
      <h2>
        {title} <img src={logo} alt="app_icon" />
      </h2>
    </header>
  );
};

export default Header;
