import React from "react";


import './Skills.css';

const Skills = () => {
  return (
  <section className="tech-stack">
    <h2 className="skills-title">Tech Stack</h2>
    <div className="skills-cont">
      <img src={require("./html5.svg").default} alt="html" className="html5" />
      <img src={require("./CSS 3.png")} alt="css" className="css" />
      <img src={require("./js-img.png")} alt="js" className="js" />
      <img src={require("./logo192.png")} alt="react" className="react"/>
      <img src={require("./GitHub-Mark-120px-plus.png")}  alt="GitHub" className="github"/>
      <img src={require("./Git-Icon.png")} alt="git" className="git" />
    </div>
  </section>
  )
}

export default Skills;