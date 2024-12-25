import React from "react";

import "./Work.css";

const Work = () => {
	return (
		<section className="work" id="work-experience">
			<h2 className="heading-work">Work Experience</h2>
			<div className="work-container">
				<div className="works">
					<h3 className="work-title">
						&#128187; Front-End Developer & Content Lead
					</h3>
					<h4 className="work-place">
						<span>&#128188;</span> Tisini- Kenya
					</h4>
					<p className="date">&#128348; February 2020- March 2024</p>
					<p className="description">
						Tisini is a Kenyan Media-tech and data company that uses numbers to
						change the lives of Africans. Here, I took part in developing a data
						collecting app that has been tailored to collect football and rugby
						statistics. Using HTML, CSS Javascript and React. I also developed
						the UI for the livescore part of the app that is hosted on GitHub. I
						lay the dynamism and brought life to the static interface my
						colleague had put up.
					</p>
				</div>
				<div className="works">
					<h3 className="work-title">&#128187; Front-End Engineer</h3>
					<h4 className="work-place">
						<span>&#128188;</span> Freelance
					</h4>
					<p className="date">&#128348; February 2022- Present</p>
					<p className="description">
						As a developer working on the side, I have been developing my own
						projects and assisting others to understand the programming world.
						One notable project I have done is this{" "}
						<a
							href="https://thepurgeweather.netlify.app/"
							target="blank"
							className="weather"
						>
							weather app.{" "}
						</a>{" "}
						On top of this I have also worked on other projects- a budget app, a
						portfolio site and a to-do app.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Work;
