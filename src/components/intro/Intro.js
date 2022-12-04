import React from "react";


import './Intro.css';

const Intro = () => {
  
  return (
    <section className="intro">
      <div className="profile">
        <div className="profile-pic">
        </div>
        <div className="bio">
        <h2 className="myName">Eliud Metto</h2>
        <h4>Front-End developer || Providing that UI/UX touch</h4>
        </div>
      </div>
      <div className="about">
        <h1 className="hi">Hi..</h1>
        <h2 className="name-title">Eliud here,</h2>
        <h4 className="title-about">About Me</h4>
        <p className="para-about">
          I'm a Front-End Developer well adept in <strong>HTML, CSS, JavaScript, React </strong> as well as version control system <strong> Git</strong> and also <strong>GitHub</strong>. Not forgetting, I provide that glossy UI/UX touch that gives users a hearty experience when interacting with your site. Your ideas and thoughts are mine to execute and bringing into fruitition what you picture is my endeavour. 
        </p>
      </div>
    </section>
  )
}

export default Intro;