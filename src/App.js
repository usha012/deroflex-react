import "./App.css";
import "./Assets/Sass/style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NewProduct from "./Pages/NewProduct";
import ProductCard from "./Components/productCard";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/new-products/:productType" element={<NewProduct />} />
					<Route path="/new" element={<ProductCard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
