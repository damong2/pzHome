import React, { useState } from "react";
import { headerNav } from "../datas/data";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow((preShow) => !preShow);
  };

  return (
    <header id="header">
      <div className="header_inner">
        <div className="head_logo">
          <h1>
            <a href="/">
              Mountains <em>REACT</em>
            </a>
          </h1>
        </div>
        <div className={`head_nav ${show ? "show" : ""}`}>
          <ul>
            {headerNav.map((nav, idx) => (
              <li key={idx}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div id="headerToggle" className="header_nav_mobile" onClick={toggleMenu}>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
