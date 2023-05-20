import React from "react";
import "./App.css";

function App() {
	return (
		<div className="app">
			<div className="advice-container">
				<p className="advice-number">Advice #11</p>

				<p className="quote">
					"Words can be like X-rays, if you use them properly—they’ll go through
					anything. You read and you’re pierced."
				</p>

				<img
					src="/images/pattern-divider-desktop.svg"
					alt="Pattern divider"
					className="pattern-divider"
				/>
				<div className="icon-dice-container">
					<img
						src="/images/icon-dice.svg"
						alt="Dice"
						className="icon-dice"
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
