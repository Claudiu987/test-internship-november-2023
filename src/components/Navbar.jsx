import React from "react";
import { ReactDOM } from "react-dom";

import "./Navbar.css";
function Navbar() {
  return (
    <>
      <header>
        <nav>
          <div className="logo-container">
            <img src="https://www.drupal.org/files/styles/grid-4-2x/public/logo%20assist.png?itok=TiYUykmz"></img>
          </div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
