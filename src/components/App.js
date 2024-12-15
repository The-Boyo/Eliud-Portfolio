import React, { useEffect, useRef, useState } from "react";

import Header from "./header/Header";
import "./App.css";
import Intro from "./intro/Intro";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Projects from "./projects/Projects";
import { ThemeStore } from "./store/ThemeStore";

const App = () => {
	const [allHeight, setAll] = useState(null);

	const allRef = useRef();

	useEffect(() => {
		const handleResize = () => {
			setAll(allRef.current.parentElement.parentElement.offsetWidth);
		};

		window.addEventListener("resize", handleResize);
	}, [allHeight]);

	return (
		<ThemeStore>
			<div className="all" ref={allRef}>
				<Header width={allHeight} />
				<Intro />
				<Skills />
				<Work />
				<Projects />

				{/* Animated background divs */}

				<div className="back one"></div>
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
					<p className="closing">
						Stitched by<span className="emoji-code">👨🏿‍💻</span>
						<span className="eliud"> Eliud</span>
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://icons8.com/icon/Q7G3j0Lgfpfb/businessman"
					>
						Businessman
					</a>{" "}
					icon by{" "}
					<a target="_blank" href="https://icons8.com" rel="noreferrer">
						Icons8
					</a>
				</footer>
			</div>
		</ThemeStore>
	);
};

export default App;
