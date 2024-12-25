import React, { useEffect, useRef, useState } from "react";

import Header from "./header/Header";
import "./App.css";
import Intro from "./intro/Intro";
import Skills from "./skills/Skills";
import Work from "./work/Work";
import Projects from "./projects/Projects";
import { ThemeStore } from "./store/ThemeStore";
import RingsBackground from "./RingsBackground";

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
				<RingsBackground />

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
