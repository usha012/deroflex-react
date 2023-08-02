import "./App.css";
import "./Assets/Sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FlexiblePipeSystem from "./Pages/FlexiblePipeSystem";
import FlexiblePipeSystemDetail from "./Pages/FlexiblePipeSystemDetail";

import VibrationIsolation from "./Pages/VibrationIsolation"
import FlexibleHose from "./Pages/FlexibleHose";
import FlexibleHoseDetail from "./Pages/FlexibleHose/FlexibleHoseDetail";
import Customized from "./Pages/Customized";
import MechanicalSeal from "./Pages/MechanicalSeal";
import HouseNutFitting from "./Pages/FlexibleHose/StainlessSteelHose/HouseNutFitting";
import FlangeBellowWelded from "./Pages/FlexibleHose/StainlessSteelHose/FlangeBellowWelded";
import StainlessSteelFlexibleExhaustPipe from "./Pages/FlexibleHose/StainlessSteelHose/StainlessSteelFlexibleExhaustPipe";
import HoseCoupleFitting from "./Pages/FlexibleHose/StainlessSteelHose/HoseCoupleFitting";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-products/flexible-pipe-system" element={<FlexiblePipeSystem />} />
					<Route path="/new-products/flexible-pipe-system/:product" element={<FlexiblePipeSystemDetail />} />

					<Route path="/new-products/vibration-isolation" element={<VibrationIsolation />} />

					<Route path="/new-products/mechanical-seal" element={<MechanicalSeal />} />
					
					<Route path="/new-products/flexible-hose" element={<FlexibleHose />} />
					<Route path="/new-products/flexible-hose/:product" element={<FlexibleHoseDetail />} />
					<Route path="/new-products/flexible-hose/:product/hose-nut-fitting" element={<HouseNutFitting/>} />
					<Route path="/new-products/flexible-hose/:product/flange-with-bellow-welded" element={<FlangeBellowWelded/>} />
					<Route path="/new-products/flexible-hose/:product/stainless-steel-flexible-exhaust-pipe" element={<StainlessSteelFlexibleExhaustPipe/>} />
					<Route path="/new-products/flexible-hose/:product/hose-coupling-fitting" element={<HoseCoupleFitting/>} />
					
					<Route path="/new-products/customized" element={<Customized />} />
					
				</Routes>
			</Router>
		</div>
	);
}

export default App;
