import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [adviceData, setAdviceData] = useState({});

	const getAdvice = () => {
		fetch("https://api.adviceslip.com/advice")
			.then((response) => response.json())
			.then((data) => {
				setAdviceData(data.slip);
			});
	};

	useEffect(() => {
		getAdvice();
	}, []);
	return (
		<div className="app">
			<div className="advice-container">
				<p className="advice-number">Advice #{adviceData.id}</p>

				<p className="quote">"{adviceData.advice}"</p>

				<img
					src="/images/pattern-divider-desktop.svg"
					alt="Pattern divider"
					className="pattern-divider"
				/>
				<div
					onClick={getAdvice}
					className="icon-dice-container"
				>
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
