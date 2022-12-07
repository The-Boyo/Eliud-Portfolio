import React, { useRef } from "react";


import './Header.css';


const Header = () => {

  const navRef = useRef();

  return (
    <header>
      <h4 className="title">
        EM
      </h4>
        <nav className="nav" ref={navRef}>
          <ul className="navbar" >
            <li>
              <a href="#" className="navlink" id="home">Home</a>
            </li>
            <li>
              <a href="#" id="about" className="navlink">About</a>
            </li>
            <li>
              <a href="#" id="skills" className="navlink">Skills</a>
            </li>
            <li>
              <a href="#" id="experience" className="navlink">Experience</a>
            </li>
            <li>
              <a href="#" id="projects" className="navlink">Projects</a>
            </li>
          </ul>
          <div>
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
    </header>
  )
}

export default Header;