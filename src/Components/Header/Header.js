import React from "react";
import logo from "./goodlife-logo.png";
import "./Header.css";

// We define the Header component and have destructured the props passed from the App component
function Header({ isLoggedIn, name }) {
  return (
    <header className="p-3  text-white">
      <img alt="Logo" src={logo} />
      <h1>GoodLife Online Store</h1>
      <h3>
        {isLoggedIn
          ? `Welcome to the platform ${name}`
          : "Please login to continue"}
      </h3>
    </header>
  );
}

export default Header;
