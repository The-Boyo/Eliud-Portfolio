import React, { useRef, useState } from "react";


import './Header.css';


const Header = ({ width }) => {

  const [button, setButton] = useState(true);

  const navRef = useRef();

  const displayNav = e => {
    if (e.target.className === "fa-solid fa-bars"){
      navRef.current.style.display = 'flex';
      setButton(false);
    }
    else {
      setButton(true);

      if (width > 600) {
        navRef.current.style.display = 'flex';
      } 
      else {
        navRef.current.style.display = 'none';
      }
    }
  }

  console.log(width)

  const renderButton = () => {
    if(button) {
      return <i className="fa-solid fa-bars" onClick={displayNav}></i>
    }
    return <i className="fa-solid fa-xmark" onClick={displayNav}></i>
  }

  return (
    <header>
      <h4 className="title">
        EM
      </h4>
        <nav className="nav" >
          <ul className="navbar" ref={navRef}>
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
            {renderButton()}
        </nav>
    </header>
  )
}

export default Header;