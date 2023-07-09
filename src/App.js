import "./App.css";
import "./Assets/Sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/header";
import Footer from "./Components/footer";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-products/:productType" element={<Home />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
