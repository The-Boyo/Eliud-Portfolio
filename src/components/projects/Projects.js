import React from "react";


import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        <div className="projo weather">
          <div className="projo-photo weather">
            <img src={require("./purges.PNG")} alt="weather app"/>
          </div>
          <h4 className="projo-name">Weather App</h4>
          <p className="projo-des">A weather app that makes use of the "weather api" api for data and shows information for upto seven different locations at a go. I went with a different look for this just to improve the UX and make it distinct. The app also has other features like the background refresher, show more and change city.</p>
          <a href="https://thepurgeweather.netlify.app/" target="blank" className="linking weather_link">
            <button className="btn-check">View</button>
          </a>
        </div>
        <div className="projo budget">
          <div className="projo-photo budget">
            <img src={require("./budget.PNG")} alt="budget app"/>
          </div>
          <h4 className="projo-name">Budget App</h4>
          <p className="projo-des">
            A fairly simple budget app made with React and incorporates Redux for state management. The complexity comes in with state management and how user data is shipped from one component to another and also how the data is utilised by different components. 
          </p>
          <a href="https://github.com/The-Boyo/Budget-E-App" target="blank" className="linking budget_link">
            <button className="btn-check">View</button>
          </a>
        </div>
        <div className="projo to-do">
          <div className="projo-photo to-do">
            <img src={require("./todo.PNG")} alt="to-do app"/>
          </div>
          <h4 className="projo-name">To-do App</h4>
          <p className="projo-des">
            A to-do app with a different feel that has features such as data persistence, a deadline countdown plus a delete button that only works when the user has marked a task as completed. The app also uses a fairly simple state management system due the nature of its complexity. 
          </p>
          <a href="https://github.com/The-Boyo/To-do-App" target="blank" className="linking to-do_link">
            <button className="btn-check">View</button>
          </a>
        </div>
        <div className="projo porfolio-site">
          <div className="projo-photo portfolio-site">
            <img src={require("./portfolio.PNG")} alt="portfolio" />
          </div>
          <h4 className="projo-name">Portfolio Site</h4>
          <p className="projo-des">
            My portfolio site holds information about who I am, what I do and the tech stack I am into, where I have worked and also my skills. This app welcomes you to my world. Here, you get to know who Eliud the developer is and much more.  
          </p>    
          <a href="https://eliudmetto.netlify.app/#" className="linking portfolio-site_link">
            <button className="btn-check">View</button>
          </a>
        </div>
      </div>
    </section>
  )
}


export default Projects;
