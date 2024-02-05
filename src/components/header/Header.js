import React, { useEffect, useRef, useState } from "react";


import './Header.css';


const Header = ({ width }) => {

  const [button, setButton] = useState(true);

  const navRef = useRef();

  const displayNav = e => {
    if (e.target.className === "fa-solid fa-bars"){
      navRef.current.style.display = 'flex';
      setButton(false);
    }
    else if (e.target.className === "fa-solid fa-xmark") {
      setButton(true);
      navRef.current.style.display='none';
    }
    else {
      setButton(true);
      navRef.current.style.display='none';
      if(width > 600 ) {
        setTimeout(()=> {
        navRef.current.style.display="flex"
        }, 0.001) 
      }
    }
  }

  useEffect(() => {
      window.matchMedia('(max-width: 600px)').addEventListener('change', () => {
        if (navRef.current) {
          if (window.matchMedia('(max-width: 600px)').matches) {
            navRef.current.style.display='none';
          }
          else {
            navRef.current.style.display='flex';
          }
        } 
        else {
          return
        }
      })
    })


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
          
          <ul className="navbar" ref={navRef} onClick={displayNav}>
            <li>
              <a href="#" className="navlink" id="home" onClick={displayNav}>Home</a>
            </li>
            <li>
              <a href="#about-me" className="navlink" onClick={displayNav}>About</a>
            </li>
            <li>
              <a href="#tech-skills" className="navlink" onClick={displayNav}>Skills</a>
            </li>
            <li>
              <a href="#work-experience" className="navlink" onClick={displayNav}>Experience</a>
            </li>
            <li>
              <a href="#projects" className="navlink" onClick={displayNav} >Projects</a>
            </li>
          </ul>
            {renderButton()}
        </nav>
    </header>
  )
}

export default Header;