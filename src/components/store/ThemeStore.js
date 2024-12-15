import React, { useEffect, useState } from "react";

const Context = React.createContext();

export const ThemeStore = (props) => {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const root = document.documentElement;
		if (theme === "light") {
			root.style.setProperty("--body-background", "rgb(236, 232, 232)");
			root.style.setProperty("--animation-back-color", "rgb(4, 7, 19)");
			root.style.setProperty("--aquamarine", "rgb(4, 7, 50, 0.89)");
			root.style.setProperty("--antiquewhite", "rgb(4, 7, 39, 0.89)");
		} else {
			root.style.setProperty(
				"--body-background",
				"linear-gradient(to left, rgb(16, 9, 56), rgb(22, 67, 126), rgb(16, 9, 56))"
			);
			root.style.setProperty("--animation-back-color", "rgb(19, 214, 214)");
			root.style.setProperty("--aquamarine", "aquamarine");
			root.style.setProperty("--antiquewhite", "antiquewhite");
		}
	}, [theme]);

	const onThemeChange = (theme) => {
		setTheme(theme);
	};

	return (
		<Context.Provider value={{ theme, onThemeChange }}>
			{props.children}
		</Context.Provider>
	);
};

export default Context;
