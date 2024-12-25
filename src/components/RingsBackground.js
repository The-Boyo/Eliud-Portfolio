import React from "react";
import Context from "./store/ThemeStore";

const RingsBackground = () => {
	const renderAnimatedBackground = (theme) => {
		if (theme === "dark") {
			return (
				<>
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
				</>
			);
		}

		return;
	};

	return (
		<Context.Consumer>
			{(val) => renderAnimatedBackground(val.theme)}
		</Context.Consumer>
	);
};

export default RingsBackground;
