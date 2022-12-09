import React from "react";


import './Intro.css';

const Intro = () => {
  
  return (
    <section className="intro" > 
      <div className="profile">
        <div className="profile-pic">
        </div>
          <div className="bio">
          <h2 className="myName">Eliud Metto</h2>
          <h4 className="do">Front-End Developer || Providing that UI/UX touch</h4>
          <div className="icon-brands">
            <a href="https://www.linkedin.com/in/eliud-metto-8819ab1b4/" target="blank">
            <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/The-Boyo" target="blank">
            <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:eliudmetto93@gmail.com" target="blank">
            <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="about" id="about-me"> 
        <h1 className="hi">Hello..</h1>
        <h2 className="name-title">Eliud here,</h2>
        <h4 className="title-about">About Me</h4>
        <p className="para-about">
          I'm a Front-End Developer adept in <strong>HTML, CSS, JavaScript, React </strong> as well as version control system <strong> Git</strong> and also <strong>GitHub</strong>. Need a website stitched up? Worry not. I am your guy. Through me, you can express yourself and gather that audience that you've been yearning for. I provide that glossy UI/UX touch that gives users a hearty experience when interacting with your site. Your aim is my execution so do not sleep on that idea. I know together we can bring the best out of it and each other. As I help you scale new heights, you'll also be expanding my scope. Onto it now!  
        </p>
      </div>
    </section>
  )
}

export default Intro;