import React from "react";


import Header from "./header/Header";
import './App.css';
import Intro from "./intro/Intro";
import Skills from "./skills/Skills";
import Work from "./work/Work";



const App = () => {
  return (
    <div className="all">
      <Header />
      <Intro />
      <Skills />
      <Work />

    {/* Animated background divs */}
    
      <div className="back one" ></div>
      <div className="back two"></div>
      <div className="back three"></div>
      <div className="back four"></div>
      <div className="back five"></div>
      <div className="back six"></div>
      <div className="back seven"></div>
      <div className="back eight"></div>
      <div className="back nine"></div>
      <div className="back ten"></div>
      <div className="back eleven"></div>
      <div className="back twelve"></div>
      <div className="back thirteen"></div>
      <div className="back fourteen"></div>
      <div className="back fifteen"></div>
      <div className="back sixteen"></div>
      <div className="back seventeen"></div>
      <div className="back eighteen"></div>
      <div className="back nineteen"></div>
      <div className="back twenty"></div>

      <footer className="end">
        <p className="closing">Stitched by<i className="fa-solid fa-hand-point-right"></i><span className="eliud">Eliud</span><i className="fa-solid fa-hand-point-left"></i></p>
      </footer>

    </div>
  )
}

export default App;