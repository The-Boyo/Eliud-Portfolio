import React from "react";

import "./Skills.css";

const Skills = () => {
	return (
		<section className="tech-stack" id="tech-skills">
			<h2 className="skills-title">Tech Stack</h2>
			<div className="skills-cont">
				<div>
					<img
						src={require("./html5.svg").default}
						alt="html"
						className="html5"
					/>
					<p>HTML</p>
				</div>
				<div>
					<img src={require("./CSS 3.png")} alt="css" className="css" />
					<p>CSS</p>
				</div>
				<div>
					<img src={require("./js-img.png")} alt="js" className="js" />
					<p>Javascript</p>
				</div>
				<div>
					<img src={require("./typescript-icon.png")} alt="typescript-icon" />
					<p>Typescript</p>
				</div>
				<div>
					<img src={require("./logo192.png")} alt="react" className="react" />
					<p>React</p>
				</div>
				<div>
					<img src={require("./nextjs-icon.png")} alt="nextjs-icon" />
					<p>Next JS</p>
				</div>
				<div>
					<img
						src={require("./nodejsStackedDark.svg").default}
						alt="nodejs-icon"
					/>
					<p>Node</p>
				</div>
				<div>
					<img src={require("./express-js.png")} alt="expressjs-icon" />
					<p>Express</p>
				</div>
				<div>
					<img src={require("./mongoDB-icon.png")} alt="mongodb-icon" />
					<p>MongoDB</p>
				</div>
				<div>
					<img src={require("./Git-Icon.png")} alt="git" className="git" />
					<p>Git</p>
				</div>
				<div>
					<img
						src={require("./GitHub-Mark-120px-plus.png")}
						alt="GitHub"
						className="github"
					/>
					<p>Github</p>
				</div>
			</div>
		</section>
	);
};

export default Skills;
