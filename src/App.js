import "./App.css";
import "./Assets/Sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductCard from "./Components/productCard";
import FlexiblePipeSystem from "./Pages/FlexiblePipeSystem";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-products/flexible-pipe-system" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/vibration-isolation" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/mechanical-seal" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/flexible-hose" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/customized" element={<FlexiblePipeSystem />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
