import React from "react";
import { ReactDOM } from "react";
import "./Footer.css";

function Footer() {
  const myName = "Domnita Andrei Claudiu";
  return (
    <>
      <footer>
        <div className="rightside">
          <p>Intership 2023</p>
        </div>
        <div className="leftside">
          <p>Created by {myName}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
