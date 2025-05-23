import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import useTime from "./hooks/useTime";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const day = useTime<string>("day"); // Friday
	const hour = useTime<string>("hour"); // 11

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<div>
					<h3>Day: {day}</h3>
					<h3>Hour: {hour}</h3>
				</div>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
