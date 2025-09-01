import Context from "../store/ThemeStore";

const ThemeChanger = () => {
	const renderTheme = ({ theme, onThemeChange }) => {
		if (theme === "dark") {
			return (
				<>
					<svg
						onClick={() => onThemeChange("light")}
						style={{ fontSize: "1.3em", cursor: "pointer" }}
						stroke="currentColor"
						fill="none"
						strokeWidth="0"
						viewBox="0 0 24 24"
						className="text-xl text-sky-500 font-extrabold cursor-pointer block"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
						></path>
					</svg>
				</>
			);
		} else {
			return (
				<svg
					onClick={() => onThemeChange("dark")}
					style={{ cursor: "pointer" }}
					stroke="currentColor"
					fill="rgb(4, 7, 19)"
					strokeWidth="0"
					viewBox="0 0 16 16"
					className="text-base cursor-pointer block"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
				</svg>
			);
		}
	};

	return <Context.Consumer>{(val) => renderTheme(val)}</Context.Consumer>;
};

export default ThemeChanger;
