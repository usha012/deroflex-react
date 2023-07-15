import "./App.css";
import "./Assets/Sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductCard from "./Components/productCard";
import FlexiblePipeSystem from "./Pages/FlexiblePipeSystem";
import FlexiblePipeSystemDetail from "./Pages/FlexiblePipeSystemDetail";

import VibrationIsolation from "./Pages/VibrationIsolation"
import FlexibleHose from "./Pages/FlexibleHose";
import FlexibleHoseDetail from "./Pages/FlexibleHoseDetail";
import Customized from "./Pages/Customized";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-products/flexible-pipe-system" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/flexible-pipe-system/:product" element={<FlexiblePipeSystemDetail />} />
					<Route path="/new-products/vibration-isolation" element={<VibrationIsolation />} />
					<Route path="/new-products/mechanical-seal" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/flexible-hose" element={<FlexibleHose />} />
					<Route path="/new-products/flexible-hose/:product" element={<FlexibleHoseDetail />} />
					<Route path="/new-products/customized" element={<Customized />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
