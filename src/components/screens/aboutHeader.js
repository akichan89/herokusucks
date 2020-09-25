import React from "react";
import { Link } from "react-router-dom";

const AboutNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav m-auto">
          
            <li>
              <Link to="/Posts1">Tad Cooper - The Original Dragon Pal</Link>
            </li>
            <li>
              <Link to="/Posts2">Dragon Pal Morphs and Colors</Link>
            </li>
            <li>
              <Link to="/Posts3">Dragon Pals Basic Care</Link>
            </li>
        
            
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default AboutNavbar;
